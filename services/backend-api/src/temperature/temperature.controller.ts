import { Controller, Get, Post, Body } from '@nestjs/common';
import { TemperatureService } from './temperature.service';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Post()
  addTemperature(@Body('value') value: number) {
    return this.temperatureService.save(value);
  }

  @Get()
  getTemperature() {
    return this.temperatureService.getLast();
  }
}
