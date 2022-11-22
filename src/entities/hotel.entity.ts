import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Hotel_Offer } from './hotelOffer.entity';
import { Picture } from './picture.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn('uuid')
  hotelId: string;

  @Column()
  hotelName: string;

  @Column()
  hotelContact: string;

  @Column()
  hotelLocation: string;

  @Column()
  hotelInfo: string;

  @Column()
  farFromMe: number;

  @Column()
  price: number;

  @Column()
  rating: string;

  @OneToMany(() => Hotel_Offer, (hotelOffer) => hotelOffer.hotel, {
    cascade: true,
  })
  public hotelOffer: Hotel_Offer[];

  @OneToOne(() => Picture, (picture) => picture.hotel)
  @JoinColumn({ name: 'picture_Id' })
  public picture: Picture;
}
