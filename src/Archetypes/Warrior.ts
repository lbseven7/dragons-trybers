import Archetype from './Archetype';

class Warrior extends Archetype {
  private _stamina: string;
  static _instances = 0;
  
  constructor(name: string) {
    super(name);
    this._stamina = 'stamina';
    Warrior._instances += 1;
  }

  // não passa no teste enquanto não se implementa o método seguinte
  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }

  get energyType(): string {
    return this._stamina;
  }
}

export default Warrior;