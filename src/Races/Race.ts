// 1 - Crie a classe Race ok
abstract class Race {
  private _name: string;
  private _dexterity: number;;

  // 01. crindo o constructor
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  // Dica: use a convenção de atributos privados para criar os atributos com _ e os getters para expor os atributos sem o _. (não passa nos testes)
  public get name(): string {
    return this._name;
  }
  // Dica: use a convenção de atributos privados para criar os atributos com _ e os getters para expor os atributos sem o _. (não passa nos testes)

  public get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;

// baseado na ala do Gus no course