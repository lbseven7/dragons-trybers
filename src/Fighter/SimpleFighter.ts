import Fighter from './Fighter';

// criar a interface lutador simples
export default interface SimpleFighter extends Fighter { // coloquei extends
  lifePoints: number;
  strength: number;

  // método para atacar
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;

}