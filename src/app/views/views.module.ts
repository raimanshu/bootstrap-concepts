import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmmetComponent } from './emmet/emmet.component';
import { ReferencesComponent } from './references/references.component';
import { CheatsheetsComponent } from './cheatsheets/cheatsheets.component';


@NgModule({
  declarations: [EmmetComponent, ReferencesComponent, CheatsheetsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
