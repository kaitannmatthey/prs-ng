import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // we need an array to store our menu items in
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    // fill the array with the following menu items
    this.menuItems = [
      new MenuItem("User", "/users/list", "Users List"),
      new MenuItem("Vendor", "/vendors/list", "Vendors List"),
      new MenuItem("Product", "/products/list", "Products List"),
      new MenuItem("Request", "/requests/list", "Requests List"),
      new MenuItem("Review", "/requests/list-review/:id", "Review List")
    ];
  }

}
