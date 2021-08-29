export class Battery {
  private id: number;
  private voltage: number | null;
  private temperature1: number | null;
  private temperature2: number | null;

  constructor(id: number) {
    this.id = id;
    this.voltage = null;
    this.temperature1 = null;
    this.temperature2 = null;

    //null mejor que 0 para diferenciar cuando los datos son cero y cuando no hay datos
  }

  public getId(): number {
    return this.id;
  }

  public getVoltage(): number | null {
    return this.voltage;
  }

  public getTemperature1(): number | null {
    return this.temperature1;
  }

  public getTemperature2(): number | null {
    return this.temperature2;
  }

  public setInfo(voltage: number, temperature1: number, temperature2: number) {
    this.voltage = voltage;
    this.temperature1 = temperature1;
    this.temperature2 = temperature2;
  }

  private random(n: number): number {
    return Math.floor(Math.random() * n);
  }

  public changeRandom() {
    if (
      this.voltage == null ||
      this.temperature1 == null ||
      this.temperature2 == null
    ) {
      this.voltage = this.random(2);
      this.temperature1 = this.random(2);
      this.temperature2 = this.random(2);
    } else {
      this.voltage += this.random(2);
      this.temperature1 += this.random(2);
      this.temperature2 += this.random(2);
    }
  }
}
