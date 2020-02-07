import { Component, OnInit, OnChanges, DoCheck, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderListService } from '../provider-list.service';
import { provider } from '../Model/model';

@Component({
  selector: 'app-detail-provider',
  templateUrl: './detail-provider.component.html',
  styleUrls: ['./detail-provider.component.css']
})
export class DetailProviderComponent implements OnInit, OnChanges,DoCheck,AfterViewInit{
       dataFetch:provider;
       id:string;
       rateingValue:number;
       arr:any=[];
       diff:number;
       arr1:any=[];

  constructor(private route:ActivatedRoute,private ser:ProviderListService) { 
    console.log('constructor');
  }
      
  ngOnInit() {
    console.log('ngonit');
        this.id= this.route.snapshot.paramMap.get('id');
        this.route.paramMap.subscribe((parmselemnt)=>{
       this.id=parmselemnt.get('id')
       this.dataFetch=  this.ser.fetchdetails(this.id);
                  this.rateingValue=this.dataFetch.rating;
    console.log(this.rateingValue)
             //this.arr=new Array(this.rateingValue)
           })
}
  ngOnChanges(){
    console.log('ngonchange');
     
  } 
  ngDoCheck(){
    console.log('ngDocheck');
   
  }
  ngAfterViewInit(){
    console.log('after');
  }

}
