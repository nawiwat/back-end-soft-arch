import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Hotel } from './hotel.entity';

@Entity()
export class Picture {
  @PrimaryGeneratedColumn('uuid')
  picId: string;

  @Column()
  picFile: string;

  @OneToOne(() => Hotel, (hotel) => hotel.picture)
  public hotel: Hotel;
}
