import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  location: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  contact: string;

  @OneToMany(() => Booking, (booking) => booking.user)
  public booking: Booking[];
}
