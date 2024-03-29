import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _baseDamage: EnergyType;
  private static mageInstances = 0;

  constructor(name: string) {
    super(name);
    this._baseDamage = 'mana';
    Mage.mageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.mageInstances;
  } 

  get energyType(): EnergyType {
    return this._baseDamage;
  }
}

export default Mage;