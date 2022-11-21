import { createParamDecorator } from '@nestjs/common';
import { User } from '../entities/user.entity';
export const GetUser = createParamDecorator((req, data): User => req.user);
