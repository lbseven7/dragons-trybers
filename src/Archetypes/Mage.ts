import Archetype from './Archetype';

class Mage extends Archetype {
  private _mana: string;
  static _instances = 0;
  
  constructor(name: string) {
    super(name);
    this._mana = 'mana';
    Mage._instances += 1;
  }

  // não passa no teste enquanto não se implementa o método seguinte
  static createdArchetypeInstances(): number {
    return Mage._instances;
  }

  get energyType(): string {
    return this._mana;
  }
}

export default Mage;