export class StreamEngine {
  private state: number;

  constructor(seed: number = 36) {
    this.state = seed;
  }

  run_provider(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 36) % 997;
    }
    return total;
  }
}

const obj = new StreamEngine();
console.log(obj.run_provider(36));
