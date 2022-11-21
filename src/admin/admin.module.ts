import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Hotel } from 'src/entities/hotel.entity';
import { Hotel_Offer } from 'src/entities/hotelOffer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel, Hotel_Offer])],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [TypeOrmModule],
})
export class AdminModule {}
