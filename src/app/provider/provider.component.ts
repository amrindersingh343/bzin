import { Component, OnInit } from '@angular/core';
import { provider } from '../Model/model';
import {ProviderListService} from '../provider-list.service'
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})



export class ProviderComponent implements OnInit {
              newdatatype:provider[];
             datadisplay:provider[];
             dataSource;
  displayedColumns: string[] = ['position', 'name'];
  

  constructor(private ser:ProviderListService) {
    this.datadisplay=this.ser.getdata();
   }
   
  ngOnInit() {
          this.ser.getProviders().subscribe(data=>{
             this.newdatatype=data
             console.log("service" + this.newdatatype)
          })      
          console.log(this.newdatatype)
    this.dataSource = new MatTableDataSource(this.datadisplay) 
    console.log("v"+this.newdatatype)
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  click(){
    console.log('hello')
  }
}
