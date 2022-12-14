import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import { PaginationComponent } from './components/pagination/pagination.component';
import {UtilsService} from "../../services/utils.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PaginationComponent
  ],
  providers: [UtilsService],
  exports: [PaginationComponent]
})
export class PaginationModule {}
