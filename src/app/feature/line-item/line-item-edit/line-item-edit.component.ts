import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { LineItem } from 'src/app/model/line-item';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {
  lineItem: LineItem = new LineItem();
  request: Request = new Request();
  products: Product[] = [];
  id: number = 0;
  
  constructor(
    private lineItemService: LineItemService,
    private requestService: RequestService,
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productService.list().subscribe(jr => this.products = jr.data as Product[]);
    this.route.params.subscribe(parameters => this.id = parameters['id']);
    this.requestService.get(this.id).subscribe(jr => this.lineItem.request = jr.data as Request);
    
    console.log("the li id to edit is: ", this.lineItemService.lineItemEditId);
    // this is getting the line item to edit
    this.lineItemService.get(this.lineItemService.lineItemEditId).subscribe(jr => this.lineItem = jr.data as LineItem)
    console.log("the line item is: ", this.lineItem)
  }
  
  update(): void {
    console.log("line item updated: ", this.lineItem);
    this.lineItemService.update(this.lineItem).subscribe(jr => location.reload());
  }

  compareProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  } 

}