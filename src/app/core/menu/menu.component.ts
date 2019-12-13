import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // we need an array to store our menu items in
  menuItems: MenuItem[] = [];
  user: User = new User();
  id: number;

  constructor(private systemService: SystemService,
    private router: Router) { }

  ngOnInit() {
    this.systemService.checkLogin();
    // fill the array with the following menu items
    this.menuItems = [
      // new MenuItem("Home", "/home", "Home"),
      new MenuItem("User", "/users/list", "Users List"),
      new MenuItem("Vendor", "/vendors/list", "Vendors List"),
      new MenuItem("Product", "/products/list", "Products List"),
      new MenuItem("Request", "/requests/list", "Requests List")
      // new MenuItem("Review", "/requests/list-review", "Review List")
    ];

    this.user = this.systemService.loggedInUser;
    this.id = this.user.id;
  }
}
