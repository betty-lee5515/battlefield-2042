export class StreamController {
  private state: number;

  constructor(seed: number = 76) {
    this.state = seed;
  }

  collect_session(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 76) % 997;
    }
    return count;
  }
}

const obj = new StreamController();
console.log(obj.collect_session(76));
