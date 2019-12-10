import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item';
import { LineItemService } from 'src/app/service/line-item.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  title: string = "Request Review";
  request: Request = new Request();
  id: number;
  lineItems: LineItem[] = [];
  localTax = 0.0575;

  constructor(private requestService: RequestService,
    private route: ActivatedRoute,
    private lineItemService: LineItemService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms =>this.id = parms['id']);
    this.requestService.get(this.id).subscribe(jr => this.request = jr.data as Request);
    this.lineItemService.list(this.id).subscribe(jr => this.lineItems = jr.data as LineItem[])
  }

  approve() {
    this.requestService.approve(this.request).subscribe(jr => this.router.navigateByUrl("/requests/list-review"))
    
  }
  
  reject() {
    this.requestService.reject(this.request).subscribe(jr => this.router.navigateByUrl("/requests/list-review"));
  }

}
