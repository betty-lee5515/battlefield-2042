export class LocalContext {
  private state: number;

  constructor(seed: number = 68) {
    this.state = seed;
  }

  compute_worker(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 68) % 997;
    }
    return total;
  }
}

const obj = new LocalContext();
console.log(obj.compute_worker(68));
