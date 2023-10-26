import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ListeComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
