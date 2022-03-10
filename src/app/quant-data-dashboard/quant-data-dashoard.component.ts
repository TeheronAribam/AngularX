import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ObjectUnsubscribedError } from 'rxjs';
import { ApiService } from '../shared/api.service';
import {QuantDataModel} from './quant-data-dashboardmodel'



@Component({
  selector: 'app-quant-data-dashoard',
  templateUrl: './quant-data-dashoard.component.html',
  styleUrls: ['./quant-data-dashoard.component.css']
})
export class QuantDataDashoardComponent implements OnInit {

  title = 'Citivelopers Modelling Platform';
  formValue!: FormGroup;
  quantDataModelObject :QuantDataModel = new QuantDataModel();
  quantData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue =this.formbuilder.group({
      id:new Date().getTime(),
      dataPoints:[''],
      type:[''],
      size:[''],
      seed:[''],
      dependency:[''],
      expression:[''],
      group:['']
    })
    this.getAllData();
  }

  postDataDetails(){
    this.quantDataModelObject.id = this.formValue.value.ID;
    this.quantDataModelObject.dataPoints = this.formValue.value.dataPoints;
    this.quantDataModelObject.type = this.formValue.value.type;
    this.quantDataModelObject.size = this.formValue.value.size;
    this.quantDataModelObject.seed = this.formValue.value.seed;
    this.quantDataModelObject.dependency = this.formValue.value.dependency;
    this.quantDataModelObject.expression = this.formValue.value.expression;
    this.quantDataModelObject.group = this.formValue.value.group;

    this.api.postData(this.quantDataModelObject)
    .subscribe(res=>{
      console.log(res);
      alert("Model added successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    },
    err=>{
      alert("Something went wrong")
    }
    )
  }
  getAllData(){
    this.api.getData()
      .subscribe(res=>{
        this.quantData = res;
      })
  }
  deleteData(row: any){

    this.api.deleteData(row.id)
    .subscribe(res=>{
      alert("Model deleted");
      this.getAllData();
    })
  }

  onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.quantDataModelObject.id = row.id;
    this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['dataPoints'].setValue(row.dataPoints);
    this.formValue.controls['type'].setValue(row.type);
    this.formValue.controls['size'].setValue(row.size);
    this.formValue.controls['seed'].setValue(row.seed);
    this.formValue.controls['dependency'].setValue(row.dependency);
    this.formValue.controls['expression'].setValue(row.expression);
    this.formValue.controls['group'].setValue(row.group);
  }

  clickAddModel(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate = false;
  }

  updateDataDetails(){
    this.quantDataModelObject.id = this.formValue.value.id;
    this.quantDataModelObject.dataPoints = this.formValue.value.dataPoints;
    this.quantDataModelObject.type = this.formValue.value.type;
    this.quantDataModelObject.size = this.formValue.value.size;
    this.quantDataModelObject.seed = this.formValue.value.seed;
    this.quantDataModelObject.dependency = this.formValue.value.dependency;
    this.quantDataModelObject.expression = this.formValue.value.expression;
    this.quantDataModelObject.group = this.formValue.value.group;
    this.api.updateData(this.quantDataModelObject,this.quantDataModelObject.id)
    .subscribe(res=>{
      alert("Updated successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    })
  }
}
