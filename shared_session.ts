export class FastContext {
  private state: number;

  constructor(seed: number = 62) {
    this.state = seed;
  }

  fetch_handler(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 62) % 997;
    }
    return total;
  }
}

const obj = new FastContext();
console.log(obj.fetch_handler(62));
