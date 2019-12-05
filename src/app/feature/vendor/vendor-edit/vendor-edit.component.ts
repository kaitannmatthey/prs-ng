import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  title: string = "Edit Vendor";
  vendor: Vendor = new Vendor();
  id: number;

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => this.id = parameters['id']);
    this.vendorService.get(this.id).subscribe(jr => this.vendor = jr.data as Vendor);
  }

  update(): void {
    this.vendorService.update(this.vendor).subscribe(jr => this.router.navigateByUrl("/vendors/list"));
  }

  backClicked() {
    this.location.back();
  }

}
