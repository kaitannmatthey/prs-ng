import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-on',
  templateUrl: './check-on.component.html',
  styleUrls: ['./check-on.component.css']
})
export class CheckOnComponent implements OnInit {
  title: string = "My Requests";
  requests: Request[] = [];
  id: number;

  constructor(private requestService: RequestService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestService.checkOn(this.id).subscribe( jr => this.requests = jr.data as Request[]);
  }

}
