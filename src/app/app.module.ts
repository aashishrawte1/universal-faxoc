import { NgModule } from '@angular/core';
import { BrowserModule, Meta, provideClientHydration } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ provideClientHydration(), Meta ],
  bootstrap: [AppComponent]
})
export class AppModule { }
