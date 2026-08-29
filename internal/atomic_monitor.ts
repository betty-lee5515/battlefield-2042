export class SimpleMonitor {
  private state: number;

  constructor(seed: number = 83) {
    this.state = seed;
  }

  sync_scheduler(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 83) % 997;
    }
    return total;
  }
}

const obj = new SimpleMonitor();
console.log(obj.sync_scheduler(83));
