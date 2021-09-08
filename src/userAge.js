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
  earthTime() {
    if ((this.earthExp-this.earth)>0){
      return this.earthExp - this.earth;
    } else {
      return "N/A";
    }
  }
  mercuryTime() {
    if ((this.mercuryExp-this.mercury)>0){
      return this.mercuryExp - this.mercury;
    } else {
      return "N/A";
    }
  }
  venusTime() {
    if ((this.venusExp-this.venus)>0){
      return this.venusExp - this.venus;
    } else {
      return "N/A";
    }
  }
  marsTime() {
    if ((this.marsExp-this.mars)>0){
      return this.marsExp - this.mars;
    } else {
      return "N/A";
    }
  }
  jupiterTime() {
    if ((this.jupiterExp-this.jupiter)>0){
      return this.jupiterExp - this.jupiter;
    } else {
      return "N/A";
    }
  }

  
}

