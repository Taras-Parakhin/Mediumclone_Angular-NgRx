import {Component, Input} from '@angular/core';

import {PopularTagType} from "../../../../types/popularTag.type";

@Component({
  selector: 'app-tegList',
  templateUrl: 'tagList.component.html',
})
export class TagListComponent {

  @Input('tags') tagsProps: PopularTagType[]
}
