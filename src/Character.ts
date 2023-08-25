import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = Character.randomStat();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.randomStat();
    this._defense = Character.randomStat();
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomStat(),
    };
  }

  private static randomStat(): number {
    return getRandomInt(1, 10);
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._archetype.energyType,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damageTaken = attackPoints - this.defense;

    if (damageTaken > 0) {
      this._lifePoints -= damageTaken;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  special?(enemy: Fighter): void {
    const bonusDamage = Character.randomStat();
    enemy.receiveDamage(this.strength * bonusDamage);
  }

  levelUp(): void {
    this._maxLifePoints += Character.randomStat();
    this._strength += Character.randomStat();
    this._dexterity += Character.randomStat();
    this._defense += Character.randomStat();
    this._energy.amount = 10;
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;
