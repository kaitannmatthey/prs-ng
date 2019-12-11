import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/model/line-item';
import { LineItemService } from 'src/app/service/line-item.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  title: string = "Request Detail";
  request: Request = new Request();
  id: number = 0;
  lineItems: LineItem[] = [];
  localTax = 0.0575;

  constructor(private requestService: RequestService,
    private route: ActivatedRoute,
    private lineItemService: LineItemService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms =>this.id = parms['id']);
    this.requestService.get(this.id).subscribe(jr => this.request = jr.data as Request);
    this.lineItemService.list(this.id).subscribe(jr => this.lineItems = jr.data as LineItem[]);
    console.log("id", this.id);
  }

  delete() {
    this.requestService.delete(this.id).subscribe(jr => this.router.navigateByUrl("requests/list"));
  }

}
