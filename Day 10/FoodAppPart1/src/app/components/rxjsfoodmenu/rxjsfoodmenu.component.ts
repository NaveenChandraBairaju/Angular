import { Component } from '@angular/core';
import { FoodMenuService } from '../../SharedServices/food-menu.service';
import { IFoodMenu, IRecipeResponse } from '../../interfaces/ifood-menu';
import { catchError, finalize, of, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-rxjsfoodmenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjsfoodmenu.component.html',
  styleUrl: './rxjsfoodmenu.component.css',
})
export class RxjsfoodmenuComponent {
  menuItems$: Observable<IFoodMenu[]> = of([]);
  loading = false;
  errorMessage = '';

  private destroy$ = new Subject<void>();

  constructor(private foodMenuService: FoodMenuService) {
    this.fetchMenu();
  }

  fetchMenu() {
    this.loading = true;

    this.foodMenuService
      .getFoodRecipeDataFromwebsite()
      .pipe(
        // Emit a valid default object of type IRecipeResponse
        startWith({
          recipes: [],
          total: 0,
          skip: 0,
          limit: 0,
        } as IRecipeResponse),

        takeUntil(this.destroy$),

        catchError((err) => {
          this.errorMessage = 'Failed to load menu items. Server error. We will fix it up soon';
          return of({
            recipes: [],
            total: 0,
            skip: 0,
            limit: 0,
          } as IRecipeResponse);
        }),

        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: IRecipeResponse) => {
        this.menuItems$ = of(data.recipes);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // emits a signal to stop all active streams
    this.destroy$.complete(); //  closes the Subject permanently
  }
}
//Subject + takeUntil + ngOnDestroy to safely clean up subscriptions.
//takeUntil() is an RxJS operator used to automatically unsubscribe from an Observable.
//takeUntil(this.destroy$) -It tells the stream: “Keep listening until the destroy$ Subject emits a value.”
//Reason for operators
/*
Because Observables can emit many values over time, we often need to:

modify the data (map)

filter unwanted data (filter)

handle timing or retries (delay, retry)

combine multiple streams (merge, concat)
*/
/*What will happen if operators are not present?
Without operators, you’d have to fetch all items, 
loop through them, apply conditions, and transform them manually — 
which defeats the simplicity RxJS provides.
*/
/*Need for pipe
because operators can only be used inside a pipe() — that’s how RxJS applies them.
Example:
this.foodService.getItems()
  .pipe(map(item => item.name.toUpperCase()))
  .subscribe(console.log);

  Chaining a peipe:
  this.foodService.getItems()
  .pipe(
    filter(item => item.price > 100),
    map(item => item.name.toUpperCase())
  )
  .subscribe(result => console.log(result));


*/
/*
startWith() is an RxJS operator that lets you emit an initial value before the 
actual Observable starts sending data.
*/
/*
When to use takeUntil():

You are subscribing to an Observable inside a component (like ngOnInit).

The Observable is long-lived (e.g., API calls, intervals, WebSockets, or event streams).
*/
/*
Naming convention: “This variable is an Observable, not plain data.”
*/
/*
Async pipe: what it can do
he async pipe by itself cannot handle errors directly — it only subscribes and unsubscribes.

If an error happens in the Observable (like API failure), the async pipe will just stop emitting data, and Angular won’t show any error message automatically.

*/
