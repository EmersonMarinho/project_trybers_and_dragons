import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _baseDamage: EnergyType;
  private static RangerInstances = 0;

  constructor(name: string) {
    super(name);
    this._baseDamage = 'stamina';
    Ranger.RangerInstances += 1;
  }    

  static createdArchetypeInstances(): number {
    return Ranger.RangerInstances;
  }

  get energyType(): EnergyType {
    return this._baseDamage;
  }
}

export default Ranger;