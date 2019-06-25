import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightModule } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { hightlightJSConfig } from './highlightjs.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule.forRoot({
      languages: hightlightJSConfig
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
