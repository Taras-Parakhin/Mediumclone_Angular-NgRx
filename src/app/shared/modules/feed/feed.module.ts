import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";

import {FeedComponent} from "./components/feed/feed.component";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {feedReducer} from "./store/reducers";
import {FeedService} from "./services/feed.service";
import {ErrorMessageModule} from "../errorMessage/errorMessage.module";
import {LoadingModule} from "../loading/loading.module";
import {PaginationModule} from "../pagination/pagination.module";
import {TagListModule} from "../tagList/tagList.module";

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', feedReducer),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule
  ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {}
