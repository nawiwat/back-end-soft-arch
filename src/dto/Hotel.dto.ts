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
