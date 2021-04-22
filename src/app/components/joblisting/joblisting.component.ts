import { Component, OnInit, Input } from '@angular/core';
import {Job} from "../../models/Job"

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.scss']
})
export class JoblistingComponent implements OnInit {
  @Input() job: Job;

  constructor() { }

  ngOnInit(): void {
  }

}
