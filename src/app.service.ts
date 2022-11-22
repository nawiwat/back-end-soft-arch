import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-users.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Hotel } from './entities/hotel.entity';
import { Request } from 'express';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}
  // getUser(user_Id: string): Promise<User> {
  //   return this.users_accountRepository
  //     .createQueryBuilder()
  //     .leftJoin('User.user_Profile', 'user_Id')
  //     .select(user_Id);
  // }
  async getNearHotel() {
    const list = await this.hotelRepository
      .createQueryBuilder('hotel')
      .orderBy('hotel.farFromMe', 'ASC')
      .getMany();
    const lowerlist = [];
    for (let i = 0; i < 3; i++) {
      lowerlist[i] = list[i];
    }
    return lowerlist;
  }

  async searhHotel(value: string) {
    const list = await this.hotelRepository
      .createQueryBuilder('hotel')
      .where('hotel.hotelName LIKE :hotelName', {
        hotelName: `%${value}%`,
      })
      .getMany();
    const lowerlist = [];
    for (let i = 0; i < 3; i++) {
      lowerlist[i] = list[i];
    }
    return lowerlist;
  }

  async getCheapHotel() {
    const list = await this.hotelRepository
      .createQueryBuilder('hotel')
      .orderBy('hotel.price', 'ASC')
      .getMany();
    const lowerlist = [];
    for (let i = 0; i < 3; i++) {
      lowerlist[i] = list[i];
    }
    return lowerlist;
  }
}
