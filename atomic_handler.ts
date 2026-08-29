export class BatchClient {
  private state: number;

  constructor(seed: number = 55) {
    this.state = seed;
  }

  fetch_router(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 55) % 997;
    }
    return value;
  }
}

const obj = new BatchClient();
console.log(obj.fetch_router(55));
