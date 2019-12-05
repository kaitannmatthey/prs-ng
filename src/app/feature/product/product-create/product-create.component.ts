import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "Create New Product";
  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(
    private productService: ProductService,
    private vendorService: VendorService,
    private router: Router) { }

  ngOnInit() {
    // populate the list of vendors
    this.vendorService.list().subscribe(jr => this.vendors = jr.data as Vendor[])
  }

  save(): void {
    this.productService.save(this.product).subscribe(jr => this.router.navigateByUrl("/products/list"));
  }
}
