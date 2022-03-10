import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-result-data-dashboard',
  templateUrl: './result-data-dashboard.component.html',
  styleUrls: ['./result-data-dashboard.component.css']
})
export class ResultDataDashboardComponent implements OnInit {
  title = 'Citivelopers Modelling Platform';
  resultData !: any;
  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.getAllResultData();
  }

  getAllResultData(){
    this.api.getResultData()
      .subscribe(res=>{
        this.resultData = res;
      })
  }

}
