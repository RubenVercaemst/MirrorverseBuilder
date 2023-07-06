import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BuilderComponent } from './builder/ui/builder/builder.component';
import { GuardianListComponent } from './builder/ui/guardian-list/guardian-list.component';
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/feature/home/home.component';

import { RouterModule, Routes} from '@angular/router';
import { BuilderDashboardComponent } from './builder/feature/builder-dashboard.component';
import { TalentDropdownComponent } from './builder/ui/talent-dropdown/talent-dropdown.component';
import { FilterSelectedPipe } from './builder/utils/filter-selected.pipe';
import { FilterGuardiansComponent } from './builder/ui/filter-guardians/filter-guardians.component';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'builder', component: BuilderDashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    GuardianListComponent,
    HomeComponent,
    BuilderDashboardComponent,
    TalentDropdownComponent,
    FilterSelectedPipe,
    FilterGuardiansComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
