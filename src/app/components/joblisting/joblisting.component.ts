import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/Job';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.scss'],
})
export class JoblistingComponent implements OnInit {
  @Input() job: Job;

  @Output() jobDetails: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }
  OnFilter(jobDetails: string) {
    this.jobDetails.emit(jobDetails);
  }
}
