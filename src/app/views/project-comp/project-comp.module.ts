import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCompRoutingModule } from './project-comp-routing.module';
import { SideNavsComponent } from './side-navs/side-navs.component';
import { HeadersComponent } from './headers/headers.component';
import { TablesComponent } from './tables/tables.component';
import { ImagesComponent } from './images/images.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WellsComponent } from './wells/wells.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { BadgesLabelsComponent } from './badges-labels/badges-labels.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelComponent } from './panel/panel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CollapseComponent } from './collapse/collapse.component';
import { TabsPillsComponent } from './tabs-pills/tabs-pills.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './forms/forms.component';
import { InputComponent } from './input/input.component';
import { Input2Component } from './input2/input2.component';
import { InputSizingComponent } from './input-sizing/input-sizing.component';
import { MediaObjectsComponent } from './media-objects/media-objects.component';
import { CarousalComponent } from './carousal/carousal.component';
import { ModalComponent } from './modal/modal.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PopoverComponent } from './popover/popover.component';
import { AffixComponent } from './affix/affix.component';


@NgModule({
  declarations: [SideNavsComponent, HeadersComponent, TablesComponent, ImagesComponent, JumbotronComponent, WellsComponent, AlertsComponent, ButtonComponent, ButtonGroupsComponent, BadgesLabelsComponent, ProgressBarComponent, PaginationComponent, PanelComponent, DropdownComponent, CollapseComponent, TabsPillsComponent, NavbarComponent, FormsComponent, InputComponent, Input2Component, InputSizingComponent, MediaObjectsComponent, CarousalComponent, ModalComponent, TooltipComponent, PopoverComponent, AffixComponent],
  imports: [
    CommonModule,
    ProjectCompRoutingModule
  ]
})
export class ProjectCompModule { }
