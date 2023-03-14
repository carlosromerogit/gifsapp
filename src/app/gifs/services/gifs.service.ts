import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];

  public results: Gif[] = [];
  public isLoading: boolean = false;
  public errorMessage: boolean = false;
  public onLine: boolean = navigator.onLine;

  private _base: string = 'https://api.giphy.com/v1/gifs/search';
  private _api_key: string = 'ZHWRW0Dioz4aQR9LdG2m7Vew7Bk70wz2';

  get history(): string[] {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
    if (!this.results.length) this.isLoading = false;
    if (!this.onLine) this.results = [];
  }

  storeHistory(query: string): void {
    if (!this.onLine) return;
    this._history = this._history.slice(0, 5);
    if (this._history.includes(query)) {
      this.getGifs(query);
      return;
    }
    this._history.unshift(query);
    localStorage.setItem('history', JSON.stringify(this._history));
    this.getGifs(query);
  }

  getGifs(query: string) {
    this.errorMessage = false;
    this.isLoading = true;
    this.http
      .get<GifsResponse>(`${this._base}?api_key=${this._api_key}&q=${query}`)
      .subscribe((resp) => {
        this.isLoading = false;
        if (!resp.data.length) {
          this.errorMessage = true;
          this.results = [];
          return;
        }

        this.results = resp.data;
        this.errorMessage = false;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
