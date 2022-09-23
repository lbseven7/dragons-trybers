// 1 - Crie a classe Race ok
abstract class Race {
  private _name: string;
  private _dexterity: number;

  // 01. crindo o constructor
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this.name;
  }

  public get dexterity(): number {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;

// baseado na aula do Gus no course