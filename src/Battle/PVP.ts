import Battle from './Battle';
import Fighter from '../Fighter';

// criar a classe PVP requisito 10
export default class PVP extends Battle {
  constructor(player: Fighter, private opponent: Fighter) {
    super(player);
  }
  
  fight(): number {
    while (this.player.lifePoints > 0 && this.opponent.lifePoints > 0) {
      this.player.attack(this.opponent);
      this.opponent.attack(this.player);
    }

    return this.player.lifePoints > 0 ? 1 : -1;
  }
}