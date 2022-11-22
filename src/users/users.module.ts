import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LocalStraetgy } from '../auth/LocalStrategy';
import { AuthService } from '../auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Booking } from 'src/entities/booking.entity';
@Module({
  imports: [
    JwtModule.register({
      secret: 'Jame12345',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    TypeOrmModule.forFeature([User, Booking]),
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    LocalStraetgy,
    AuthService,
  ],
})
export class UsersModule {}
