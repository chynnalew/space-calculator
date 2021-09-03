export class UserAge {
  constructor(name, earth) {
    this.name = name;
    this.earth = earth;
    this.mercury = (this.earth / 0.24);
    this.venus = (this.earth / 0.62);
    this.mars = (this.earth / 1.88);
    this.jupiter = (this.earth / 11.86);
  }
}

export class UserLife extends UserAge {
  constructor(name, earth, life) {
    super(name, earth);
    this.earthExp = life;
    this.mercuryExp = (this.earthExp / 0.24);
    this.venusExp = (this.earthExp / 0.62);
    this.marsExp = (this.earthExp / 1.88);
    this.jupiterExp = (this.earthExp / 11.86);
  }

  mercuryTime() {
    return this.mercuryExp - this.mercury;
  }
  venusTime() {
    return this.venusExp - this.venus;
  }
  marsTime() {
    
  }
}

