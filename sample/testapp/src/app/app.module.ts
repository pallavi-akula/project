import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ComponentComponent } from './component/component.component';

const routes: Routes = [
	{path: 'c1', component: Component1Component},
	{path: 'c2', component: Component2Component},
	{path: '', component: Component1Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    ComponentComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
