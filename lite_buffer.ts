export class FastEngine {
  private state: number;

  constructor(seed: number = 12) {
    this.state = seed;
  }

  build_collector(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 12) % 997;
    }
    return result;
  }
}

const obj = new FastEngine();
console.log(obj.build_collector(12));
