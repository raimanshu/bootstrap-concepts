import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmmetComponent } from './emmet/emmet.component';
import { ReferencesComponent } from './references/references.component';
import { CheatsheetsComponent } from './cheatsheets/cheatsheets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, EmmetComponent, ReferencesComponent, CheatsheetsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewsModule { }
