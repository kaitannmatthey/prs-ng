import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }
  

}
