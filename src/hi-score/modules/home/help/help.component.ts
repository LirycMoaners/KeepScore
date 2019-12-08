import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../core/header/header.service';

@Component({
  selector: 'hs-help',
  templateUrl: 'help.component.html',
  styleUrls: ['help.component.scss']
})

export class HelpComponent implements OnInit {
  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.title = 'Help';
  }
}