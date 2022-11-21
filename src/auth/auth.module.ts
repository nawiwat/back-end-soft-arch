import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStraetgy } from './LocalStrategy';
/*add*/
import { UsersModule } from '../users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      approval_prompt: 'force',
      access_type: 'offline',
    }),
    JwtModule.register({
      secret: 'Jame12345',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    LocalStraetgy,
    AuthService,
  ],
})
export class AuthModule {}
