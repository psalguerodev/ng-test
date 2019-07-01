import { Player2 } from './player2';
describe('Event Emmitter test', () => {
  let player: Player2;
  let hp: number;

  beforeEach(() => {
    player = new Player2();
  });

  it('should return 20 if receive 80 of hurt', () => {
    player.change.subscribe(hpplayer => hp = hpplayer);
    player.receivesHp(80);
    expect(hp).toBe(20);
  });

  it('should return 0 if receive 100 of hurt', () => {
    player.change.subscribe(hpplayer => hp = hpplayer);
    player.receivesHp(100);
    expect(hp).toBe(0);
  });
});
