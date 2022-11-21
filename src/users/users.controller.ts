import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  NotFoundException,
  Param,
  Headers,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/create-user.dto';
import { UserNotFoundException } from '../auth/UserNotFound.exception';
import { HttpExceptionFilter } from '../auth/HttpException.filter';
import { SerializedUser } from '../auth/index';
import { UsersService } from '../users/users.service';
import { LocalStraetgy } from '../auth/LocalStrategy';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
    private readonly localStraetgy: LocalStraetgy,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/username/:username')
  getByUsername(@Param('username') username: string) {
    const user = this.userService.getUsersByUsername(username);
    if (user) return new SerializedUser(user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.getUserById(id);
    if (user) return new SerializedUser(user);
    else {
      throw new UserNotFoundException();
    }
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put('reset')
  updateUser(
    @Headers('authorization') header,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    console.log(updateUserDto);
    console.log(header);
    console.log('Header: ', header);
    const authorizedData = this.localStraetgy.decodeJWTToken({ token: header });
    console.log('authorizedData: ', authorizedData);
    const updateUserBody = {
      ...updateUserDto,
      ...authorizedData,
    };
    return this.userService.updateUser(updateUserBody);
  }

  @Get('/profile/:Token')
  getUserProfile(@Param('Token') Token: string) {
    const rawProfile = this.localStraetgy.decodeJWTToken({ token: Token });
    return this.userService.getUserProfile(rawProfile);
  }
}
