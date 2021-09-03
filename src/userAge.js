export class UserAge {
  constructor(name, earth, life) {
    this.name = name;
    this.earth = earth;
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;

    this.earthLife = life;
    this.mercuryLife = 0;
    this.venusLife = 0;
    this.marsLife = 0;
    this.jupiterLife = 0;
  }
  
  mercuryAge() {
    this.mercury += (this.earth / 0.24);
  }

  venusAge() {
    this.venus += (this.earth / 0.62);
  }

  marsAge() {
    this.mars += (this.earth / 1.88);
  }

  jupiterAge() {
    this.jupiter += (this.earth / 11.86);
  }

  ageCalculator() {
    this.mercuryAge();
    this.venusAge();
    this.marsAge();
    this.jupiterAge();
  }
}
