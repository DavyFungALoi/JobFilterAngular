import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/Job';
import jobdata from '../../../assets/data.json';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  jobs: Job[];

  constructor() {}

  ngOnInit(): void {
    this.jobs = jobdata;
  }
}
