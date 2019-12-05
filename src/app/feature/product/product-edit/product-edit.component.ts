import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = "Edit Product";
  product: Product = new Product;
  vendors: Vendor[] = [];
  id: number;

  constructor(
    private productService: ProductService,
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // populate list of vendors
    this.vendorService.list().subscribe(jr => this.vendors = jr.data as Vendor[])

    this.route.params.subscribe(parameters => this.id = parameters['id']);
    this.productService.get(this.id).subscribe(jr => this.product = jr.data as Product);
  }

  update(): void {
    this.productService.update(this.product).subscribe(jr => this.router.navigateByUrl("/products/list"));
  }

  backClicked() {
    this.location.back();
  }

  compareVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }

}
