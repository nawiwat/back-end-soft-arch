import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Hotel } from './hotel.entity';
import { Room } from './room.entity';

@Entity()
export class Hotel_Offer {
  @PrimaryGeneratedColumn('uuid')
  offerId: string;

  @Column()
  emptyRoom: number;

  @Column()
  totalRoom: number;

  @Column()
  offerPrice: number;

  @ManyToOne(() => Hotel, (hotel) => hotel.hotelOffer)
  @JoinColumn({ name: 'hotel_Id' })
  public hotel: Hotel;

  @OneToMany(() => Room, (room) => room.hotelOffer)
  public room: Room[];
}
