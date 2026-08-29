export class HybridParser {
  private state: number;

  constructor(seed: number = 25) {
    this.state = seed;
  }

  fetch_monitor(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 25) % 997;
    }
    return total;
  }
}

const obj = new HybridParser();
console.log(obj.fetch_monitor(25));
