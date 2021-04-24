import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/Job';

@Component({
  selector: 'app-filtercomponent',
  templateUrl: './filtercomponent.component.html',
  styleUrls: ['./filtercomponent.component.scss'],
})
export class FiltercomponentComponent implements OnInit {
  @Input() filter: string;
  @Input() filterArray: string[];
  constructor() {}

  ngOnInit(): void {}
}
