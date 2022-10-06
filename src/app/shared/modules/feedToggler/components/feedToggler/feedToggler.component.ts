import {Component, Input, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {isLoggedInSelector} from "../../../../../auth/store/selector";

@Component({
  selector: 'app-feedToggler',
  templateUrl: 'feedToggler.component.html'
})
export class FeedTogglerComponent implements OnInit {

  @Input('tagName') tageNameProps: string | null

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
