import { Column } from 'typeorm';

export class createBookingDto {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}

export class makeReciept {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  hotelName: string;

  @Column()
  price: number;

  @Column()
  hotelContact: string;
}
