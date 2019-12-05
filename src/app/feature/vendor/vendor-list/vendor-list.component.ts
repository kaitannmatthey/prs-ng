import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent extends BaseComponent implements OnInit {
  title: string = "Vendors List";
  vendors: Vendor[] = [];

  constructor(
    private vendorService: VendorService,
    protected systemService: SystemService) { 
      super(systemService);
  }

  ngOnInit() {
    super.ngOnInit();

    // subscribe to the list of vendors we get from the get request
    this.vendorService.list().subscribe(jr => {
      // add the data inside the returned JsonResponse to the array of vendors
      this.vendors = jr.data as Vendor[];
    });
  }

}
