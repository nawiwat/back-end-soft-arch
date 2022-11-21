import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Booking } from './booking.entity';
import { Hotel_Offer } from './hotelOffer.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  roomId: string;

  @Column()
  offerId: string;

  @Column()
  roomNum: string;

  @Column({ default: true })
  isEmpty: boolean;

  @ManyToOne(() => Hotel_Offer, (hotelOffer) => hotelOffer.room)
  @JoinColumn({ name: 'roomOffer_Id' })
  public hotelOffer: Hotel_Offer;

  @OneToOne(() => Booking, (booking) => booking.room)
  public booking: Booking;
}
