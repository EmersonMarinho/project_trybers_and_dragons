import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _baseDamage: EnergyType;
  private static necromancerInstances = 0;

  constructor(name: string) {
    super(name);
    this._baseDamage = 'mana';
    Necromancer.necromancerInstances += 1;
  }    

  static createdArchetypeInstances(): number {
    return Necromancer.necromancerInstances;
  }

  get energyType(): EnergyType {
    return this._baseDamage;
  }
}

export default Necromancer;