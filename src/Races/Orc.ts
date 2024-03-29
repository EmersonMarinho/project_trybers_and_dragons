// src/Races/Orc.ts
import Race from './Race';

class Orc extends Race {
  private static instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
