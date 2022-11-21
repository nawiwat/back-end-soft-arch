import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Room } from './entities/room.entity';
import { Receipt } from './entities/receipt.entity';
import { Hotel } from './entities/hotel.entity';
import { Hotel_Offer } from './entities/hotelOffer.entity';
import { Picture } from './entities/picture.entity';
import { Booking } from './entities/booking.entity';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_test',
      entities: [User, Hotel, Hotel_Offer, Room, Booking, Receipt, Picture],
      synchronize: true,
    }),
    UsersModule,
    AdminModule,
    AuthModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
