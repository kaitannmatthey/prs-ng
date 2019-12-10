import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item';
import { LineItemService } from 'src/app/service/line-item.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base.component';
import { Request } from 'src/app/model/request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent extends BaseComponent implements OnInit {
  title: string = "Line Items";
  lineItems: LineItem[] = [];
  lineItem: LineItem = new LineItem();
  id: number;
  lineItemId: number = -1;
  itemsByRequest: LineItem[] = [];
  requests: Request[] =[];
  request: Request = new Request();
  localTax: number = 0.0575;
  public addNew: boolean = false;
  public edit: Boolean = false;

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
    
    this.lineItemService.list(this.id).subscribe(jr => this.itemsByRequest = jr.data as LineItem[]);
  
    this.requestService.get(this.id).subscribe(jr => this.request = jr.data as Request);
  }

  clicked() {
    this.addNew = true;
    console.log("clicked - add new is now ", this.addNew);
  }

  delete(id: number) {
    this.lineItemId = id;
    console.log("li id ", this.lineItemId);
    this.lineItemService.delete(this.lineItemId).subscribe(jr => location.reload());
  }

  editLineItem(id: number) {
    this.lineItemId = id;
    this.lineItemService.lineItemEditId = id;
    this.edit = true;
  }
} 
