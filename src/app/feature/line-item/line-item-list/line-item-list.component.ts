import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item';
import { LineItemService } from 'src/app/service/line-item.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base.component';
import { Request } from 'src/app/model/request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent extends BaseComponent implements OnInit {
  title: string = "Line Items";
  lineItems: LineItem[] = [];
  lineItem: LineItem = new LineItem();
  updatedLineItem: LineItem = new LineItem();
  newLineItem: LineItem = new LineItem();
  id: number;
  lineItemId: number = -1;
  itemsByRequest: LineItem[] = [];
  requests: Request[] =[];
  request: Request = new Request();
  localTax: number = 0.0575;
  public addNew: boolean = false;
  public edit: Boolean = false;
  products: Product[] = [];

  constructor(private lineItemService: LineItemService,
    protected systemService: SystemService,
    private requestService: RequestService,
    private productService: ProductService,
    private route: ActivatedRoute) {
    super(systemService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.route.params.subscribe(parms => this.id = parms['id']);
    this.loadData();
    this.productService.list().subscribe(jr => this.products = jr.data as Product[]);

    this.requestService.get(this.id).subscribe(jr => {
      this.request = jr.data as Request
      console.log("request on init: ", this.request);
    } );
  }
  
  loadData() {
    this.lineItemService.list(this.id).subscribe(jr => this.itemsByRequest = jr.data as LineItem[]);
    this.requestService.get(this.id).subscribe(jr => {
      this.newLineItem.request = jr.data as Request;
      console.log("new line request: ", this.newLineItem.request);
      this.requestService.editRequest = this.newLineItem.request;
      console.log("req serv editreq: ", this.requestService.editRequest);
      this.request.total = this.newLineItem.request.total;
    });
    // this.requestService.get(this.id).subscribe(jr => this.request = jr.data as Request);
    this.newLineItem = new LineItem();
  }

  clicked() {
    this.addNew = true;
  }

  delete(id: number) {
    this.lineItemId = id;
    this.lineItemService.delete(this.lineItemId).subscribe(jr => { this.loadData() });
  }

  editLineItem(id: number) {
    this.lineItemService.get(id).subscribe(jr => this.updatedLineItem = jr.data as LineItem);
    this.edit = true;
  }

  save(): void {
    this.lineItemService.save(this.newLineItem).subscribe(jr => { this.loadData() });
    this.addNew = false;
  }
  update(): void {
    this.lineItemService.update(this.updatedLineItem).subscribe(jr => { this.loadData() });
    this.edit = false;
  }

  compareProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }

} 
