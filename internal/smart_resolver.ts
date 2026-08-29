export class SmartSession {
  private state: number;

  constructor(seed: number = 95) {
    this.state = seed;
  }

  fetch_monitor(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 95) % 997;
    }
    return total;
  }
}

const obj = new SmartSession();
console.log(obj.fetch_monitor(95));
