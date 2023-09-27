import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  contentImageCover: string = '';

  @Input()
  contentCardTitle: string = '';

  @Input()
  contentCardDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
