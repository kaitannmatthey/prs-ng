import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = new User();
  id: number = -1;

  constructor(private router: Router,
    private requestService: RequestService,
    private systemService: SystemService) { }

  ngOnInit() {
    this.user = this.systemService.loggedInUser;
    this.id = this.user.id;
  }

  new() {
    this.router.navigateByUrl("requests/create");
  }

  check() {
    this.requestService.checkOn(this.user.id).subscribe;
  }

  browse() {
    this.router.navigateByUrl("products/list");
  }

}
