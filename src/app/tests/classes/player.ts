export class Player {
  private hp: number;
  private nickname: string;

  constructor() {
    this.hp = 100;
  }

  receivesHp(hurt: number): number {
   if (hurt >= this.hp) {
     this.hp = 0;
   } else {
     this.hp = this.hp - hurt;
   }

   return this.hp;
  }

  setNickname(nickname: string): string {
    this.nickname = nickname;
    return this.nickname;
  }
}
