import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('query') query!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  sendQuery() {
    const query: string = this.query.nativeElement.value.toLowerCase().trim();
    if (!query.length) return;
    this.gifsService.storeHistory(query);
    this.query.nativeElement.value = '';
  }
}
