import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Receipt } from './receipt.entity';
import { Room } from './room.entity';
import { User } from './user.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  bookingId: string;

  @Column()
  roomId: string;

  @Column()
  checkIn: string;

  @Column()
  checkOut: string;

  @OneToOne(() => Room, (room) => room.booking)
  @JoinColumn({ name: 'room_Id' })
  room: Room;

  @OneToOne(() => Receipt, (receipt) => receipt.booking)
  receipt: Receipt;

  @ManyToOne(() => User, (user) => user.booking)
  @JoinColumn({ name: 'user_Id' })
  public user: User;
}
