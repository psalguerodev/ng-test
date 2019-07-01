import { Player } from './player';
import { getNicknames } from '../arrays/array';
describe('Classes tests', () => {

  let player: Player;
  let hp: number;
  let nickname: string;

  beforeEach(() => {
    player = new Player();
  });

  it('should return 10 hp if receive 90 of hurt', () => {
    hp = player.receivesHp(90);
    expect(hp).toEqual(10);
  });

  it('should return 80 hp if receive 20 of hurt', () => {
    hp = player.receivesHp(80);
    expect(hp).toBe(20);
  });

  it('should return 0 hp if receive 100 of hurt', () => {
    hp = player.receivesHp(100);
    expect(hp).toEqual(0);
  });

  it('should return nickname if receive nickname value', () => {
    nickname = player.setNickname(getNicknames()[0]);
    expect(nickname).toContain('psalguerodev');
  });

});
