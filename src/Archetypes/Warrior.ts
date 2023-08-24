import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _baseDamage: EnergyType;
  private static WarriorInstances = 0;

  constructor(name: string) {
    super(name);
    this._baseDamage = 'stamina';
    Warrior.WarriorInstances += 1;
  }    

  static createdArchetypeInstances(): number {
    return Warrior.WarriorInstances;
  }

  get energyType(): EnergyType {
    return this._baseDamage;
  }
}

export default Warrior;