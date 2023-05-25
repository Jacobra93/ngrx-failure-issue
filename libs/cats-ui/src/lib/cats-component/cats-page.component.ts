import {Component, inject, OnInit} from '@angular/core';
import {CatsFacade} from "../../../../cats-data-access/src";

@Component({
  selector: 'ngrx-failure-issue-cats-component',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.css'],
})
export class CatsPageComponent implements OnInit {
  catsFacade = inject(CatsFacade);
  cats$ = this.catsFacade.cats$.pipe()

  ngOnInit() {
    this.catsFacade.init();
  }
}
