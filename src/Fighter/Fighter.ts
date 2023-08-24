interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(damage: number): number;
}

export default Fighter;