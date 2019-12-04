class HoneyMakerBee extends Bee {
  constructor(age = 10, color, food, job = 'make honey') {
    super(age, color, food);
    this.job = job;
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}