import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
import { RequestService } from 'src/app/service/request.service';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {
  title: string = "Request Review";
  userId: number;
  requests: Request[] = [];
  user: User = new User();

  constructor(private systemService: SystemService,
    private requestService: RequestService,
    private userService: UserService) { }

  ngOnInit() {
    this.userId = this.systemService.loggedInUser.id;
    this.userService.get(this.userId).subscribe(jr => this.user = jr.data as User);

    this.requestService.listReview(this.userId).subscribe(jr => this.requests = jr.data as Request[]);
  }

}
