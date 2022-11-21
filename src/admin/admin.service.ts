import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from 'src/entities/hotel.entity';
import { CreateHotelDto, CreateOfferDto } from 'src/dto/Hotel.dto';
import { Hotel_Offer } from 'src/entities/hotelOffer.entity';

Injectable();
export class AdminService {
  constructor(
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
    @InjectRepository(Hotel_Offer)
    private offerRepository: Repository<Hotel_Offer>,
  ) {}

  async create(createHotelDto: CreateHotelDto) {
    return this.hotelRepository.save(createHotelDto);
  }

  async createOffer(createOfferDto: CreateOfferDto, hotelId: string) {
    const offer = new Hotel_Offer();
    const hotel = this.hotelRepository.findOneBy({ hotelId });
    offer.offerId = createOfferDto.offerId;
    offer.emptyRoom = createOfferDto.emptyRoom;
    offer.totalRoom = createOfferDto.totalRoom;
    offer.offerPrice = createOfferDto.offerPrice;
    offer.hotel = await hotel;
    // await this.hotelRepository
    //   .createQueryBuilder('hotel')
    //   .where('hotel.hotelId = :hotelId', { hotelId: `%${hotelId}%` })
    //   .relation('hotel', 'hotelOffer')
    //   .of('hotel')
    //   .add(offer);
    //(await hotel).hotelOffer.push(offer);
    this.offerRepository.save(offer);
    return offer;
  }

  async getall() {
    const hotel = await this.hotelRepository
      .createQueryBuilder('hotel')
      .leftJoinAndSelect('hotel.hotelOffer', 'hotelOffer')
      //.where('user.userId LIKE :userId', { userId: `%${userId}%` })
      //.select(userId, 'user.userId')
      .getMany();
    return hotel;
  }

  async getHotelBySearch(getBy: string) {
    return getBy;
  }

  async getCheapHotel() {
    return null;
  }

  async getHotelNearMe() {
    return null;
  }
}
