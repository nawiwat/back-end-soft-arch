import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateHotelDto, CreateOfferDto } from 'src/dto/Hotel.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.adminService.create(createHotelDto);
  }

  @Post(':hotelId')
  createOffer(
    @Param('hotelId') hotelId: string,
    @Body() createOfferDto: CreateOfferDto,
  ) {
    return this.adminService.createOffer(createOfferDto, hotelId);
  }

  @Get()
  getall() {
    return this.adminService.getall();
  }

  @Get('get/:getBy')
  getOffer(@Param('getBy') getBy: string) {
    if (getBy == 'GetHotelNearMe') {
      return this.adminService.getHotelNearMe();
    }
    if (getBy == 'GetCheapHotel') {
      return this.adminService.getCheapHotel();
    } else {
      return this.adminService.getHotelBySearch(getBy);
    }
  }
}
