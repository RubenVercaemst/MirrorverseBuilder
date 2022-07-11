import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BuilderComponent } from './views/builder/builder.component';
import { GuardianListComponent } from './views/guardian-list/guardian-list.component';
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    GuardianListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
