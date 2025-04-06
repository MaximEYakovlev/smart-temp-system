import { Module } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { TemperatureController } from './temperature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureEntity } from './temperature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureEntity])],
  providers: [TemperatureService],
  controllers: [TemperatureController]
})
export class TemperatureModule {}
