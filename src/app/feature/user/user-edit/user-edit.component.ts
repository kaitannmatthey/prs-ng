import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string = "Edit User";
  user: User = new User();
  id: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => this.id = parameters['id']);
    this.userService.get(this.id).subscribe(jr => this.user = jr.data as User);
  }

  update(): void {
    this.userService.update(this.user).subscribe(jr => this.router.navigateByUrl("/users/list"));
  }

  backClicked() {
    this.location.back();
  }

}
