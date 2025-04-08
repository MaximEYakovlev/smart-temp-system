import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TemperatureEntity } from './temperature.entity';
import { Repository } from 'typeorm';
import { TemperatureGateway } from './temperature.gateway';

@Injectable()
export class TemperatureService {
  constructor(
    @InjectRepository(TemperatureEntity)
    private readonly repo: Repository<TemperatureEntity>,
    private readonly gateway: TemperatureGateway,
  ) {}

  async save(value: number) {
    const entity = this.repo.create({ value });
    await this.repo.save(entity);
    this.gateway.sendTemperature(value);
    return { status: 'ok', value };
  }

  async getLast() {
    const last = await this.repo.findOne({
      order: { createdAt: 'DESC' },
    });
    return { value: last?.value ?? null };
  }
}
