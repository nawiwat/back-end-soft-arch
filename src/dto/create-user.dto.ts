import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Generated } from 'typeorm';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @IsEmail()
  username: string;

  @IsNotEmpty()
  @MinLength(10)
  password: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  contact: string;

  @IsNotEmpty()
  @MinLength(9)
  phone: string;

  @Column('uuid')
  @Generated('uuid')
  userId: string;
  @Column()
  userLocation: string;

  @Column('uuid')
  @Generated('uuid')
  profileId: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @IsEmail()
  username: string;

  @IsNotEmpty()
  @MinLength(10)
  password: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  contact: string;

  @IsNotEmpty()
  @MinLength(9)
  phone: string;

  @IsNotEmpty()
  oldPassword: string;

  @IsNotEmpty()
  newPassword: string;
}

export class userProfile {
  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  phone: string;
}

export class getUserByDecode {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  iat: string;

  @Column()
  exp: string;
}
