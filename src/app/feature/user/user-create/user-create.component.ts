import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title: string = "Create New User";
  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  save(): void {
    this.userService.save(this.user).subscribe(jr => this.router.navigateByUrl("/users/list"));
  }
}
