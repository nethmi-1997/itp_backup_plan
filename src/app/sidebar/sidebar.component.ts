import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/product', title: 'Product',  icon: 'pe-7s-graph', class: '' },
    { path: '/order', title: 'Order',  icon:'pe-7s-note2', class: '' },
    { path: '/delivery', title: 'Delivery',  icon:'pe-7s-news-paper', class: '' },
    { path: '/warehouse', title: 'Warehouse',  icon:'pe-7s-science', class: '' },
    { path: '/employee', title: 'Employee',  icon:'pe-7s-map-marker', class: '' },
    { path: '/customer', title: 'Customer',  icon:'fa fa-user', class: '' },
    { path: '/attendance', title: 'Attendance',  icon:'pe-7s-bell', class: '' },
    { path: '/salary', title: 'Salary',  icon:'fa fa-user', class: '' },
    { path: '/adjustments', title: 'Adjustments',  icon:'fa fa-user', class: '' },
    { path: '/pettycash', title: 'Petty Cash',  icon:'fa fa-user', class: '' },
    { path: '/documents', title: 'ISO documents',  icon:'pe-7s-user', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
