import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _mana: EnergyType;
  static _instances = 0;
  
  constructor(name: string) {
    super(name);
    this._mana = 'mana';
  }
  
  get energyType(): EnergyType {
    return this._mana;
  }

  // não passa no teste enquanto não se implementa o método seguinte
  static createdArchetypeInstances(): number {
    Mage._instances += 1;
    return Mage._instances;
  }
}

export default Mage;