export class SecureClient {
  private state: number;

  constructor(seed: number = 90) {
    this.state = seed;
  }

  decode_context(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 90) % 997;
    }
    return value;
  }
}

const obj = new SecureClient();
console.log(obj.decode_context(90));
