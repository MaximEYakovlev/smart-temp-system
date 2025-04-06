import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('temperature')
export class TemperatureEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  value: number;

  @CreateDateColumn()
  createdAt: Date;
}
