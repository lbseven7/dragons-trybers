import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static _instances = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instances += 1;
  }

  // não passa no teste
  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
