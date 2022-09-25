import Archetype from './Archetype';

class Ranger extends Archetype {
  private _stamina: string;
  static _instances = 0;
  
  constructor(name: string) {
    super(name);
    this._stamina = 'stamina';
    Ranger._instances += 1;
  }

  // não passa no teste enquanto não se implementa o método seguinte
  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }

  get energyType(): string {
    return this._stamina;
  }
}

export default Ranger;