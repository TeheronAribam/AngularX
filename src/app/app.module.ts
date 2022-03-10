import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuantDataDashoardComponent } from './quant-data-dashboard/quant-data-dashoard.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultDataDashboardComponent } from './result-data-dashboard/result-data-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    QuantDataDashoardComponent,
    ResultDataDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
