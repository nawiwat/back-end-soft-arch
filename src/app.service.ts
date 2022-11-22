import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-users.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  // getUser(user_Id: string): Promise<User> {
  //   return this.users_accountRepository
  //     .createQueryBuilder()
  //     .leftJoin('User.user_Profile', 'user_Id')
  //     .select(user_Id);
  // }
  async getCheapHotel() {
    return 0;
  }
}
