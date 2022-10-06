import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";

import {FeedTogglerComponent} from "./components/feedToggler/feedToggler.component";

@NgModule({
  declarations: [FeedTogglerComponent],
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  exports: [FeedTogglerComponent]
})
export class FeedTogglerModule {}
