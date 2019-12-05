import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { BaseComponent } from '../../base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent extends BaseComponent implements OnInit {
  title: string = "Request List";
  requests: Request[] = [];

  constructor(
    private requestService: RequestService,
    protected systemService: SystemService) {
      super(systemService);
   }

  ngOnInit() {
    super.ngOnInit();

    // subscribe to the list of requests we get from the get request
    this.requestService.list().subscribe(jr => {
      // add the data inside the returned JsonResponse to the array of requests
      this.requests = jr.data as Request[];
      console.log("all the requests:", this.requests);
    });
  }

}
