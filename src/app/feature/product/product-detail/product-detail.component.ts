import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title: string = "Product Detail";
  product: Product = new Product();
  id: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.productService.get(this.id).subscribe(jr => this.product = jr.data as Product);
  }

  delete() {
    this.productService.delete(this.id).subscribe(jr => this.router.navigateByUrl("products/list"));
  }
}
