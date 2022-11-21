import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Booking } from './booking.entity';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  recriptId: string;

  @Column()
  bookingId: string;

  @Column()
  bookingdate: string;

  @Column()
  transactionInfo: string;

  @OneToOne(() => Booking, (booking) => booking.receipt)
  @JoinColumn({ name: 'booking_Id' })
  public booking: Booking;
}
