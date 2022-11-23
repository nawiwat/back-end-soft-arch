import { Column, Generated } from 'typeorm';

export class CreateHotelDto {}

export class CreateOfferDto {
  @Column('uuid')
  @Generated('uuid')
  offerId: string;

  @Column()
  emptyRoom: number;

  @Column()
  totalRoom: number;

  @Column()
  offerPrice: number;
}

export class GetHotelInfo {
  @Column()
  hotelName: string;

  @Column()
  hotelContact: string;

  @Column()
  hotelLocation: string;

  @Column()
  hotelInfo: string;

  @Column()
  price: number;

  @Column()
  rating: string;
}
