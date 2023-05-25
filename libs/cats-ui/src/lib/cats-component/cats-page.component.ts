import {Component, inject, OnInit} from '@angular/core';
import {CatsFacade} from "../../../../cats-data-access/src/lib/+state/cats/cats.facade";

@Component({
  selector: 'ngrx-failure-issue-cats-component',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.css'],
})
export class CatsPageComponent implements OnInit {
  catsFacade = inject(CatsFacade);

  ngOnInit() {
    this.catsFacade.init();
    this.catsFacade.cats$.pipe().subscribe(cats => console.log('cats', cats))
  }
}
