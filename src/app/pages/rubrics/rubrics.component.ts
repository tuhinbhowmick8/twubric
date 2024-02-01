import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-rubrics',
  templateUrl: './rubrics.component.html',
  styleUrls: ['./rubrics.component.scss']
})
export class RubricsComponent {

  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    this.getAllData();
  }

  allData;
  getAllData() {
    this._dataService.getData().subscribe(res => {
      this.allData = res
      console.log(this.allData, 'test')
    }

    )
  }


}
