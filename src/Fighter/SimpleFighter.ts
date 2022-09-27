// criar a interface lutador simples
export default interface SimpleFighter {
  lifePoints: number;
  strength: number;

  // método para atacar
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;

}