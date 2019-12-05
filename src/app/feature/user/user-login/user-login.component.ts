import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends BaseComponent implements OnInit {
  message: string = "";
  user: User = new User();

  constructor(
    private userService: UserService,
    protected systemService: SystemService,
    private router: Router) {
    super(systemService);
  }

  ngOnInit() {
    // defaulting username and password for testing purposes
    this.user.userName = "admin";
    this.user.password = "admin";

    // initialize system user to null
    this.systemService.loggedInUser = null;
  }

  login() {
    this.userService.login(this.user).subscribe(jr => {
      if (jr.errors == null) {
        if (jr.data == null || jr.data.length == 0) {
          this.message = "Invalid Username/Password combo.  Retry";
        }
        else {
          // should be g2g!
          this.user = jr.data as User;
          this.systemService.loggedInUser = this.user;
          this.router.navigateByUrl('/users/list');
        }
      }
      else {
        this.message = "Invalid Username/Password combo.  Retry";
      }
    });
  }

}
