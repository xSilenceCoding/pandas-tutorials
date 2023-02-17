import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
})
export class SideNavigationComponent implements OnInit {
  constructor() {}
  submenu: any;

  ngOnInit(): void {
    this.toggleCollapse();
    this.openNav();
    const myDiv = document.querySelector('.site');
    this.addClassBasedOnWindowSize(myDiv, 'mininav', 768);
  }

  addClassBasedOnWindowSize(
    element: any,
    className: string,
    breakpoint: number
  ): void {
    if (window.innerWidth < breakpoint) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }

  toggleCollapse() {
    const hasChildDivs = document.querySelectorAll('.has-child');
    hasChildDivs.forEach((div: any) => {
      div.addEventListener('click', () => {
        div.classList.toggle('collapse');
      });
    });
  }

  // opens navigation if click on nested menu
  openNav() {
    const trigger = document.querySelector('.trigger a');
    const classAdd = document.querySelector('.site');

    trigger.addEventListener('click', function () {
      classAdd.classList.toggle('mininav');
    });
  }
}
