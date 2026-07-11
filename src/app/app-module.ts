import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './dashboard/dashboard';
import { Navbar } from './navbar/navbar';
import { Create } from './create/create';
import { List } from './list/list';
import { Rating } from './rating/rating';

@NgModule({
  declarations: [App, Dashboard, Navbar, Create, List, Rating],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
