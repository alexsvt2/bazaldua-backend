import { Prisma } from '@prisma/client';
import { IsEmail, IsEnum, IsString } from 'class-validator';

export enum Role {
  ADMIN = 'ADMIN',
  TECHNICIAN = 'TECHNICIAN',
  CUSTOMER_SUPPORT = 'CUSTOMER_SUPPORT',
}

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role)
  role: Role;
}
