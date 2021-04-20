import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
// import { HeaderComponent } from 'src/app/header/header.component';
import { SideNavsComponent } from './side-navs/side-navs.component';
import { TablesComponent } from './tables/tables.component';
// import { SideNavsComponent } from './side-navs/side-navs.component';

const routes: Routes = [
  {
    path: 'headers',
    component: HeadersComponent
  },
  {
    path: 'side-navs',
    component: SideNavsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCompRoutingModule { }
