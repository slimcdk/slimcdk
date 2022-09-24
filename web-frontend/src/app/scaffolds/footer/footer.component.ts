import { Component, OnInit } from '@angular/core';

import gitInfo from '../../../git-version.json';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  gitInfo = gitInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
