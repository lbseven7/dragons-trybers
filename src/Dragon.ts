import Monster from './Monster';

// criar a classe Dragon
export default class Dragon extends Monster {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = 0;
  }
}

// não sei como implementar isso