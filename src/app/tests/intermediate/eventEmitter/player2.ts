import { EventEmitter } from '@angular/core';

export class Player2 {
  private hp: number;
  change: EventEmitter<number>;

  constructor() {
    this.hp = 100;
    this.change = new EventEmitter<number>();
  }

  receivesHp(hurt: number): void {
   if (hurt >= this.hp) {
     this.hp = 0;
   } else {
     this.hp = this.hp - hurt;
   }

   this.change.emit(this.hp);
  }
}
