import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { RecordComponent } from "./display-record/display-record.component";
import { DataCollectorService } from "./services/data-collector.service";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataCollectorService],
  bootstrap: [],
  entryComponents: [RecordComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(RecordComponent, { injector: this.injector });
    customElements.define('app-display-record', myCustomElement);
  }
}