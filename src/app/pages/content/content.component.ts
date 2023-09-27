import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';

  @Input()
  contentImageCover: string = '';

  @Input()
  contentCardTitle: string = '';

  @Input()
  contentCardDescription: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValueComponent(this.id);
  }

  setValueComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id === id)[0];

    this.contentCardTitle = result.title;
    this.contentCardDescription = result.description;
    this.contentImageCover = result.photoImageCover;

    if (!result) {
    }
  }
}
