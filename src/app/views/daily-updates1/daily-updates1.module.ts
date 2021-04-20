import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyUpdates1RoutingModule } from './daily-updates1-routing.module';
import { DuIndexComponent } from './du-index/du-index.component';
import { PtrComponent } from './ptr/ptr.component';
import { ColOrderComponent } from './col-order/col-order.component';
import { NavigateUsingJsComponent } from './navigate-using-js/navigate-using-js.component';


@NgModule({
  declarations: [DuIndexComponent, PtrComponent, ColOrderComponent, NavigateUsingJsComponent],
  imports: [
    CommonModule,
    DailyUpdates1RoutingModule
  ]
})
export class DailyUpdates1Module { }
