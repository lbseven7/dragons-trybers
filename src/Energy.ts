// Vídeoaula da Universidade XTI - JAVA - 052 - Polimorfismo, Interfaces
export default interface Energy {
  type_: EnergyType;
  amount: number;
}
// Arlisson 03
export type EnergyType = 'mana' | 'stamina';
