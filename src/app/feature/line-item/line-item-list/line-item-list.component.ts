import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item';
import { LineItemService } from 'src/app/service/line-item.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base.component';
import { Request } from 'src/app/model/request.class';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent extends BaseComponent implements OnInit {
  title: string = "Line Items";
  lineItems: LineItem[] = [];
  id: number;
  itemsByRequest: LineItem[] = [];
  requests: Request[] =[];
  request: Request = new Request();
  localTax: number = 0.0575;
  public addNew: boolean = false;

  constructor(private lineItemService: LineItemService,
    protected systemService: SystemService,
    private requestService: RequestService,
    private route: ActivatedRoute) {
    super(systemService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("request id ", this.id);

    this.requestService.list().subscribe(jr => {
      this.requests = jr.data as Request[];
      for (let r of this.requests) {
        if(r.id == this.id) {
          this.request = r;
        }
      }
    });

    // subscribe to the list of requests we get from the get request
    this.lineItemService.list().subscribe(jr => {
      // add the data inside the returned JsonResponse to the array of requests
      this.lineItems = jr.data as LineItem[];
      console.log("all line items ", this.lineItems);
      for (let lineItem of this.lineItems) {
        if(lineItem.request.id == this.id) {
          this.itemsByRequest.push(lineItem);
        }
      }
    });
    console.log("add new? ", this.addNew);
  }

  clicked() {
    this.addNew = true;
    console.log("clicked - add new is now ", this.addNew);
  }
}
