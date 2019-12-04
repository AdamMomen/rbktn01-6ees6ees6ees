class RetiredForagerBee extends ForagerBee {
  constructor(age = 40, color = 'grey', food, job = 'gamble', canFly = false) {
    super(age, color, food, job, canFly);
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble() {
    this.treasureChest.push('wining');
  }
}
