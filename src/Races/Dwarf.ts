import Race from './Race';   

class Dwarf extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;