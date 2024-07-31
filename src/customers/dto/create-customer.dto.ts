import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';
export class CreateCustomerDto implements Prisma.CustomerCreateInput {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;
}
