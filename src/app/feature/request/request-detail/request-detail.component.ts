import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  title: string = "Request Detail";
  request: Request = new Request();
  id: number;

  constructor(
    private requestService: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestService.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
      console.log("req detail init - request:",this.request);
    });
  }

  delete() {
    this.requestService.delete(this.id).subscribe(jr => this.router.navigateByUrl("requests/list"));
  }

}
