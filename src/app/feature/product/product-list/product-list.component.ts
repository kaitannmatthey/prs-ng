import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { BaseComponent } from '../../base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseComponent implements OnInit {
  title: string = "Products List";
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    protected systemService: SystemService) {
    super(systemService);
   }

  ngOnInit() {
    super.ngOnInit();

    // subscribe to the list of products we get from the get request
    this.productService.list().subscribe(jr => {
      // add the data inside the returned JsonResponse to the array of products
      this.products = jr.data as Product[];
      console.log(this.products);
    });
  }
 
}
