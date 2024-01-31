import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  constructor(private _dataService: DataService){

  }

  ngOnInit(){
    this.getAllData();
    this.getUsersData()
  }

  allData;
getAllData(){
  this._dataService.getData().subscribe(res=>{
    this.allData= res
    console.log(this.allData, 'test')
  }

  )
}

users;
getUsersData() {
  // Call the service method
  this._dataService.getUsers().subscribe(
    (data) => {
      this.users = data;
    },
    (error) => {
      console.error('Error fetching data: ', error);
    }
  );
}

}
