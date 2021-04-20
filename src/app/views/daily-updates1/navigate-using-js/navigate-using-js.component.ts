import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate-using-js',
  templateUrl: './navigate-using-js.component.html',
  styleUrls: ['./navigate-using-js.component.scss']
})
export class NavigateUsingJsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gotoSection(section) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: "center" });
    }
  }
}
