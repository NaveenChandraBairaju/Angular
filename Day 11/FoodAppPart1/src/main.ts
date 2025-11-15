import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { OrderHistoryModule } from './app/features/order-history/order-history.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(OrderHistoryModule),
    ...appConfig.providers,
  ]
}).catch((err) => console.error(err));
