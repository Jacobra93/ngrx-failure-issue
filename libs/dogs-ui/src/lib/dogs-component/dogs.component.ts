import {Component, inject, OnInit} from '@angular/core';
import {DogsFacade} from "../../../../dogs-data-access/src";

@Component({
  selector: 'ngrx-failure-issue-dogs-component',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  dogsFacade = inject(DogsFacade);
  dogs$ = this.dogsFacade.dogs$.pipe()

  ngOnInit() {
    this.dogsFacade.init();
  }
}
