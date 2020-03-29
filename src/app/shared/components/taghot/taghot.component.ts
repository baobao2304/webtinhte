import { Component, OnInit, Input } from '@angular/core';
import { TagHot } from '../../models/taghot';

@Component({
  selector: 'app-taghot',
  templateUrl: './taghot.component.html',
  styleUrls: ['./taghot.component.css']
})
export class TaghotComponent implements OnInit {
  @Input() dataTagHot: TagHot;
  constructor() { }

  ngOnInit(): void {
  }

}
