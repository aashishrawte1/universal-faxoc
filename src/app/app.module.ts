import { NgModule } from '@angular/core';
import { BrowserModule, Meta, provideClientHydration } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ provideClientHydration(), Meta ],
  bootstrap: [AppComponent]
})
export class AppModule { }
