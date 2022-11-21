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

  // @Get(':user_Id')
  // getUser(@Param('user_Id') user_Id: string) {
  //   return this.appService.getUser(user_Id);
  // }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.appService.create(createUserDto);
  // }
}
