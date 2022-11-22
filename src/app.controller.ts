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

  @Get('/cheapHotel')
  getCheapHotel() {
    return this.appService.getCheapHotel();
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.appService.create(createUserDto);
  // }
}
