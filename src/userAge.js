export class UserAge {
  constructor(name, earth, life) {
    this.name = name;
    this.earth = earth;
    this.mercury = (this.earth / 0.24);
    this.venus = (this.earth / 0.62);
    this.mars = (this.earth / 1.88);
    this.jupiter = (this.earth / 11.86);

    this.earthExp = life;
    this.mercuryExp = (this.earthExp / 0.24);
    this.venusExp = 0;
    this.marsExp = 0;
    this.jupiterExp = 0;
  }
  
}
