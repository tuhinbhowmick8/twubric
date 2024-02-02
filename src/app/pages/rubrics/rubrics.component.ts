import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-rubrics',
  templateUrl: './rubrics.component.html',
  styleUrls: ['./rubrics.component.scss']
})
export class RubricsComponent implements OnInit {

  constructor(private _dataService: DataService) {
    this.getAllData();
  }

  ngOnInit() {
  }
  fromFilterDate: Date;
  toFilterDate: Date;
  allUsersData: any = [];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['uid', 'username', 'image', 'fullname', 'total', 'chirpiness', 'friends', 'influence', 'join_date'];

  @ViewChild(MatSort) sort: MatSort;

 
  getAllData() {
    this._dataService.getData().subscribe(res => {
      this.allUsersData = res;
      const requiredUsersData = this.allUsersData.map(item => {
        return {
          ...item,
          ...item.twubric, 
        };
      });
      this.dataSource = new MatTableDataSource<any>(requiredUsersData);
      this.dataSource.sort = this.sort;
      console.log(requiredUsersData, 'requiredUsersData');
    });
  }

  applyDateFilter() {
    if (this.fromFilterDate && this.toFilterDate) {
      this.dataSource.filterPredicate = (data, filter) => {
        const joinDate = new Date(data.join_date * 1000);

        return joinDate >= this.fromFilterDate && joinDate <= this.toFilterDate;
      };

      this.dataSource.filter = `${this.fromFilterDate.getTime()}:${this.toFilterDate.getTime()}`;
    }
  }

  handleFromDateChange(event: MatDatepickerInputEvent<Date>) {
    this.fromFilterDate = event.value;
  }

  handleToDateChange(event: MatDatepickerInputEvent<Date>) {
    this.toFilterDate = event.value;
  }
}
