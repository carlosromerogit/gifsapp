import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { GifsComponent } from './home/gifs/gifs.component';
import { GifsService } from './services/gifs.service';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    SearchComponent,
    ResultComponent,
    GifsComponent,
    CardComponent,
  ],
  exports: [GifsComponent],
  imports: [CommonModule],
  providers: [GifsService],
})
export class GifsModule {}
