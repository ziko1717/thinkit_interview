import { Component, OnInit } from '@angular/core';
import {OpenapiService} from 'src/openapi.service';
import { MatTableDataSource } from '@angular/material/table';



export interface IntegerMapping {
  original: number;
  transformed: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  

  displayedColumns: string[] = ['original', 'transformed'];
  
  ELEMENT_DATA = [];
  dataSource;
  constructor(private openapiService: OpenapiService) { }

  ngOnInit() {
    var jsonOutput = this.openapiService.getOpenAPI().subscribe((res:any) => {
      var jsonInput = {}
      jsonInput = res;
      var array = []
      //generating the array
       array = res["randomInput"];
        console.log("original array "+array);
        //the json output
       var json= {};
     for(var i=0;i<array.length;i++) {
       //copying the original array to do a splice on it
       var arraySplited = array.map((x) => x);
        arraySplited.splice(i,1);
        var prod = 1;
        //calculate the product of the spliced array
        for(var j=0;j<arraySplited.length;j++) {
          prod = prod * parseInt(arraySplited[j]);
        }
        //to manage the duplicated originals do a json output like this : {"index" : {"key" : "value"}}
        var jsonInter = {};
        jsonInter[array[i]] = prod;
        json[i] = jsonInter
     }
     //browsing the json elements to fill the dataset
     for (var key in json) {
       for(var key2 in json[key])
      this.ELEMENT_DATA.push({key2, value: json[key][key2]});
    }
    console.log(this.ELEMENT_DATA)
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  
     }
      
      )
  
  }

  
  
  }



