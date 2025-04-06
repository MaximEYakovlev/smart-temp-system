import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureModule } from './temperature/temperature.module';
import { TemperatureEntity } from './temperature/temperature.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'my_password',
      database: 'smart_temp',
      entities: [TemperatureEntity],
      synchronize: true,
    }),
    TemperatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
