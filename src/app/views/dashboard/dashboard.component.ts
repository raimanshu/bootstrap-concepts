import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { data } from '../../../assets/api-data/dashboard'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  forms = 'forms';
  dashboardData;
  constructor(private route: ActivatedRoute) { 
    console.log(this.dashboardData);
    this.dashboardData = data;
  }

  ngOnInit(): void {

  }

  gotoSection(section){
    const element = document.getElementById(section);
    if(element){
      element.scrollIntoView({ behavior: 'smooth', block: "center" });
    }
  }

}
