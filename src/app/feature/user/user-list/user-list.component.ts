import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { BaseComponent } from 'src/app/feature/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseComponent implements OnInit {
  title: string = "User List";
  // create an array to hold our list of users
  users: User[] = [];

  constructor(
    private userService: UserService,
    protected systemService: SystemService) { 
      super(systemService);
  }

  ngOnInit() {
    super.ngOnInit();
    console.log("User list - Verify we have a logged in user!");
    console.log("User: ", this.loggedInUser);
    console.log("Admin? ", this.isAdmin); // this isn't working
    console.log("Reviewer? ", this.isReviewer); // this isn't working

    // subscribe to the list of users we get from the get request
    this.userService.list().subscribe(jr => {
      // add the data inside the returned JsonResponse to the array of users
      this.users = jr.data as User[];
    });
  }

}
