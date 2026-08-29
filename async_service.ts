export class CoreWorker {
  private state: number;

  constructor(seed: number = 40) {
    this.state = seed;
  }

  encode_collector(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 40) % 997;
    }
    return acc;
  }
}

const obj = new CoreWorker();
console.log(obj.encode_collector(40));
