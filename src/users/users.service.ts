import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from '../entities/user.entity';
import {
  CreateUserDto,
  getUserByDecode,
  resetName,
  UpdateUserDto,
  userProfile,
} from '../dto/create-user.dto';
import { SerializedUser, User } from '../auth/index';
import { Repository } from 'typeorm';
import { comparePasswords, encodePassword } from '../auth/bcrypt';
import { LocalStraetgy } from 'src/auth/LocalStrategy';

@Injectable()
export class UsersService {
  jwtService: any;
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  //private readonly localStraetgy: LocalStraetgy,

  private users: User[] = [];
  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }
  getUsersByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    console.log(password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }
  async updateUser(body: UpdateUserDto) {
    const beforeEncrypt = 'Elephant12345678';
    const afterEncrypt = encodePassword(beforeEncrypt);
    console.log('this is beforeEncrypt');
    console.log(beforeEncrypt);
    console.log('this is afterEncrypt');
    console.log(afterEncrypt);

    const test = comparePasswords(beforeEncrypt, afterEncrypt);
    console.log('this is test');
    console.log(test);

    const { username, oldPassword, newPassword } = body;
    const validateUserAccount = await this.userRepository.findOneBy({
      username,
    });

    console.log('validateUserAccount...');
    console.log(validateUserAccount);

    const userPasswordFromDB = validateUserAccount?.password;

    console.log({ userPasswordFromDB });

    if (!userPasswordFromDB) return { success: false };
    const validatedUserAccount = comparePasswords(
      oldPassword,
      userPasswordFromDB,
    );

    if (!validatedUserAccount) return { success: false };
    const newPasswordHashed = encodePassword(newPassword);

    await this.userRepository.update(
      { username },
      {
        password: newPasswordHashed,
      },
    );

    return { success: true };
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOneBy({ username });
  }

  async getUserProfile(rawProfile: getUserByDecode) {
    const user = this.userRepository
      .createQueryBuilder('user')
      .where('user.username LIKE :username', {
        username: `%${rawProfile.username}%`,
      })
      .getOne();
    const profile = new userProfile();
    profile.username = (await user).username;
    profile.name = (await user).name;
    profile.phone = (await user).phone;
    return profile;
  }

  async resetname(newname: resetName, authorizedData: UpdateUserDto) {
    const user = new userProfile();
    user.username = (await authorizedData).username;
    const user2 = this.userRepository
      .createQueryBuilder('user')
      .where('user.username LIKE :username', {
        username: `%${user.username}%`,
      })
      .getOne();
    const Id = (await user2).id;
    await this.userRepository.update(Id, newname);
    return { success: true };
  }
}
