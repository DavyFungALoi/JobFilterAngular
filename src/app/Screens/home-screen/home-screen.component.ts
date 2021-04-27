import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/Job';
import jobdata from '../../../assets/data.json';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  jobs: Job[];
  @Input() filterArray: string[];
  constructor() {}

  functionCompare = (filterArray: string[], jobs: Job[]) => {
    const iterator = jobs.values();
    const testArray = [];
    for (const value of iterator) {
      for (var key in value) {
        const property = value[key];

        if (filterArray.includes(property)) {
          testArray.push(value);
          this.jobs = testArray;
        }
      }
    }
  };
  OnclickAdded(jobDetails: string): void {
    if (this.filterArray.indexOf(jobDetails) !== -1) {
      console.log('Value exists!');
      this.functionCompare(this.filterArray, this.jobs);
    } else {
      this.filterArray.push(jobDetails);
      console.log('added value');
    }
  }
  resetArray() {
    this.filterArray = [];
    this.jobs = jobdata;
  }

  ngOnInit(): void {
    this.jobs = jobdata;
    this.filterArray = [];
  }
}

/*
const functionCompare = (array, arrayOfObjects) => {
  const iterator = arrayOfObjects.values();
  const testArray = [];
  for (const value of iterator) {
    for (var key in value) {
      var value2 = value[key];
      if (array.includes(value2)) {
        testArray.push(value);
        console.log(testArray);
      }
    }
  }
};





 *ngFor="let filter of filterArray"
 */
