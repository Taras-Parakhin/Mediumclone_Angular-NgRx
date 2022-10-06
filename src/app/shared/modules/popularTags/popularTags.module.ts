import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {RouterLinkWithHref} from "@angular/router";

import {PopularTagsComponent} from "./components/popularTags/popularTags.component";
import {PopularTagsService} from "./services/popularTags.service";
import {GetPopularTagsEffect} from "./store/effects/getPopularTags.effect";
import {popularTagsReducer} from "./store/reducers";
import {LoadingModule} from "../loading/loading.module";
import {ErrorMessageModule} from "../errorMessage/errorMessage.module";

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', popularTagsReducer),
    LoadingModule,
    ErrorMessageModule,
    RouterLinkWithHref
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}
