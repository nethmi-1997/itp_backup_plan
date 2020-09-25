import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/product', title: 'Product',  icon: 'fa fa-th-large', class: '' },
    { path: '/order', title: 'Order',  icon:'fa fa-archive', class: '' },
    { path: '/delivery', title: 'Delivery',  icon:'fa fa-plane', class: '' },
    { path: '/providers', title: 'Providers',  icon:'fa fa-car', class: '' },
    { path: '/warehouse', title: 'Warehouse',  icon:'fa fa-industry', class: '' },
    { path: '/employee', title: 'Employee',  icon:'fa fa-users', class: '' },
    { path: '/customer', title: 'Customer',  icon:'fa fa-user', class: '' },
    { path: '/attendance', title: 'Attendance',  icon:'fa fa-book', class: '' },
    { path: '/salary', title: 'Salary',  icon:'fa fa-money', class: '' },
    { path: '/adjustments', title: 'Adjustments',  icon:'fa fa-check-square-o', class: '' },
    { path: '/pettycash', title: 'Petty Cash',  icon:'fa fa-credit-card-alt', class: '' },
    { path: '/documents', title: 'ISO documents',  icon:'fa fa-file-text', class: '' },
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
