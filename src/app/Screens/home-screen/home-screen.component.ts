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
  OnclickAdded(jobDetails: string): void {
    if (this.filterArray.indexOf(jobDetails) !== -1) {
      console.log('Value exists!');
    } else {
      this.filterArray.push(jobDetails);
      console.log('added value');
    }
    console.log(this.filterArray)
  }

  ngOnInit(): void {
    this.jobs = jobdata;
    this.filterArray = [];
  }
}
