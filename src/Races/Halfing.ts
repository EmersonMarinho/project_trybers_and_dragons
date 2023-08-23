import Race from './Race';

class Halfling extends Race {
  private static instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
