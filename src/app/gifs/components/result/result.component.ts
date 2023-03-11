import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  constructor(private gifsService: GifsService) {}
  get isLoading(): boolean {
    return this.gifsService.isLoading;
  }
  get errorMessage() {
    return this.gifsService.errorMessage;
  }
  get results(): Gif[] {
    return this.gifsService.results;
  }
}
