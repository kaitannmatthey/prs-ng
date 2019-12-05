import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title: string = "Create New Request"
  request: Request = new Request();
  users: User[] = [];

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private systemService: SystemService,
    private router: Router) { }

  ngOnInit() {
    // fill list of users
    this.userService.list().subscribe(jr => this.users = jr.data as User[]);
  }
  
  save(): void {
    this.request.user = this.systemService.loggedInUser;
    this.requestService.save(this.request).subscribe(jr => this.router.navigateByUrl("/requests/list"));
  }

}
