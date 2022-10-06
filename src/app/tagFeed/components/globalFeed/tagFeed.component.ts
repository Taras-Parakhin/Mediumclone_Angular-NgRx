import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-tagFeed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss']
})
export class TagFeedComponent implements OnInit {

  apiUrl: string
  tagName: string

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.tagName = params['slug']
      this.apiUrl = `/articles?tag=${this.tagName}`
    })
  }

}
