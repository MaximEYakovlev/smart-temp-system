import { Module } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { TemperatureController } from './temperature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureEntity } from './temperature.entity';
import { TemperatureGateway } from './temperature.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([TemperatureEntity])],
  providers: [TemperatureService, TemperatureGateway],
  controllers: [TemperatureController]
})
export class TemperatureModule {}
