import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  title: string = "Vendor Detail";
  vendor: Vendor = new Vendor();
  id: number;

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.vendorService.get(this.id).subscribe(jr => this.vendor = jr.data as Vendor);
  }

  delete() {
    this.vendorService.delete(this.id).subscribe(jr => this.router.navigateByUrl("vendors/list"));
  }

}
