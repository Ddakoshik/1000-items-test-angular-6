import { Component, OnInit } from '@angular/core';
import { GetCardService } from '../get-card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  cards = [];
  allCards = [];

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 1000;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 1000;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;



  constructor(private getCardService: GetCardService) { }

  ngOnInit() {
    this.getCards();
  }



  saverange(e) {
    this.cards = this.allCards.slice(0, e);
    console.log(this.cards);
  }

  takeItems() {
    this.cards = this.allCards.slice(0, this.value);
    console.log(this.cards);
  }

  getCards(): void {
    this.getCardService.getCards()
      .subscribe((data: any[]) => {
        this.allCards = data;
        console.log(this.allCards);
        this.takeItems();
       }
    );
  }
}
