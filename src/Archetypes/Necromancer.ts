import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _mana: string;
  static _instances = 0;
  
  constructor(name: string) {
    super(name);
    this._mana = 'mana';
    Necromancer._instances += 1;
  }

  // não passa no teste
  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }

  get energyType(): string {
    return this._mana;
  }
}

export default Necromancer;