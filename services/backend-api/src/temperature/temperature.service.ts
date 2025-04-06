import { Injectable } from '@nestjs/common';

@Injectable()
export class TemperatureService {
  private data: number[] = [];

  save(value: number) {
    this.data.push(value);
    return { status: 'ok', value };
  }

  getLast() {
    const last = this.data[this.data.length - 1];
    return { value: last ?? null };
  }
}
