import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColOrderComponent } from './col-order/col-order.component';
import { DuIndexComponent } from './du-index/du-index.component';
import { NavigateUsingJsComponent } from './navigate-using-js/navigate-using-js.component';
import { PtrComponent } from './ptr/ptr.component';

const routes: Routes = [
  {
    path:'',
    component: DuIndexComponent
  },
  {
    path:'points-to-remember',
    component: PtrComponent
  },
  {
    path:'col-order',
    component: ColOrderComponent
  },
  {
    path:'navigate-using-js',
    component: NavigateUsingJsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyUpdates1RoutingModule { }
