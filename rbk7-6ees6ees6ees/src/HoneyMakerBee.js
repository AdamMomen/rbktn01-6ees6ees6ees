class HoneyMakerBee extends Bee {
  constructor(age = 10, color, food) {
    super(age, color, food);
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}