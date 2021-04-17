import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCompRoutingModule } from './project-comp-routing.module';
import { SideNavsComponent } from './side-navs/side-navs.component';
import { HeadersComponent } from './headers/headers.component';


@NgModule({
  declarations: [SideNavsComponent, HeadersComponent],
  imports: [
    CommonModule,
    ProjectCompRoutingModule
  ]
})
export class ProjectCompModule { }
