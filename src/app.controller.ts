import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hotelnearme')
  getNearHotel() {
    return this.appService.getNearHotel();
  }

  @Get('/search/:value')
  searchHotel(@Param('value') value: string) {
    return this.appService.searhHotel(value);
  }

  @Get('/cheaphotel')
  getCheapHotel() {
    return this.appService.getCheapHotel();
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.appService.create(createUserDto);
  // }
}
