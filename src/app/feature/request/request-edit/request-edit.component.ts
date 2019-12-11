import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title: string = "Edit Request";
  request: Request = new Request();
  users: User[] = [];
  id: number = 0;
  loggedInUser: User = new User();

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    protected systemService: SystemService,
    private location: Location) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestService.get(this.id).subscribe(jr => this.request = jr.data as Request);

    // subscribe to the list of users we get from the get request
    this.userService.list().subscribe(jr => {
      // add the data inside the returned JsonResponse to the array of users
      this.users = jr.data as User[];

      this.loggedInUser = this.systemService.loggedInUser;
    });
  }
  update(): void {
    this.requestService.update(this.request).subscribe(jr => this.router.navigateByUrl("/requests/list"));
  }

  compareUser(a: User, b: User): boolean {
    return a && b && a.id === b.id;
  }
  
  compareDeliveryMode(a: Request, b: Request): boolean {
    if (a && b && a.deliveryMode === b.deliveryMode){
      console.log("match!")
    }
    return a && b && a.deliveryMode === b.deliveryMode;
  }

  submitReview(): void {
    this.request = this.requestService.editRequest;
    this.requestService.submitReview(this.request).subscribe(jr => this.router.navigateByUrl("/requests/list"));
  }

  back(): void {
    this.location.back();
  }

}
