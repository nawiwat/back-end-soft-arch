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

  @Get('/:input')
  getNearHotel(@Param('input') input: string) {
    if (input === 'hotelnearme') {
      return this.appService.getNearHotel();
    }
    if (input === 'cheaphotel') {
      return this.appService.getCheapHotel();
    } else {
      return this.appService.searhHotel(input);
    }
  }

  // @Get('/search/:value')
  // searchHotel(@Param('value') value: string) {
  //   return this.appService.searhHotel(value);
  // }

  // @Get('/cheaphotel')
  // getCheapHotel() {
  //   return this.appService.getCheapHotel();
  // }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.appService.create(createUserDto);
  // }
}
