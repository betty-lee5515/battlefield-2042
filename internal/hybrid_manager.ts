export class SharedRouter {
  private state: number;

  constructor(seed: number = 6) {
    this.state = seed;
  }

  decode_registry(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 6) % 997;
    }
    return total;
  }
}

const obj = new SharedRouter();
console.log(obj.decode_registry(6));
