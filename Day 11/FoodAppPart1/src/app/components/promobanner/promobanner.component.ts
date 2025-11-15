import { Component, Input } from '@angular/core';
import { SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promobanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promobanner.component.html',
  styleUrl: './promobanner.component.css'
})
export class PromobannerComponent {
  // promoMessage: string = 'We have a special post diwali offer!!!!';
  // constructor() {
  //   console.log('constructor executed');
  // }
  // ngOnInit() {
  //   console.log('ng On Init triggered');
  // }
  // ngOnChanges(changes: SimpleChange): void {
  //   console.log('ngOnChanges:', changes);
  //     console.log('ng On Changes triggered');

  // }
  // checkOffer(){
  //   this.promoMessage = 'We have a special post diwali offer ending in 2 days';
  // }
  // ngOnDestroy(): void {
  //   console.log("ng On Destroy triggered");
  // }
  @Input() promoText: string = '';

  @Input() visibleDuration: number = 5;
  countdown: number = 10; // 5 minutes = 300 seconds
  intervalId!: any;

  isVisible: boolean = false;
  private timer: any;

  constructor() {
    console.log('Constructor: PromoBannerComponent created');
    this.countdown = this.visibleDuration;
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log('ngOnChanges:', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component Initialized');
    if (this.visibleDuration > 0) {
      this.isVisible = true;
      this.startVisibilityTimer();
    }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection run');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View initialized');
  }

  startVisibilityTimer(): void {
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.isVisible = false;
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component destroyed');
    clearTimeout(this.timer);
  }
}

