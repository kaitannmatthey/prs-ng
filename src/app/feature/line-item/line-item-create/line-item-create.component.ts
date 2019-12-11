import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { LineItem } from 'src/app/model/line-item';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Request } from 'src/app/model/request.class';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  lineItem: LineItem = new LineItem();
  request: Request = new Request();
  products: Product[] = [];
  id: number = 0;
  user: User = new User();
  
  constructor(
    private lineItemService: LineItemService,
    private requestService: RequestService,
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productService.list().subscribe(jr => this.products = jr.data as Product[]);
    this.route.params.subscribe(parameters => this.id = parameters['id']);
    this.requestService.get(this.id).subscribe(jr => this.lineItem.request = jr.data as Request);
  }
  
  update(): void {
    this.lineItemService.update(this.lineItem).subscribe(jr => location.reload());
  }
  
  
  

}
