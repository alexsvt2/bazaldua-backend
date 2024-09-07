import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';
export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  createdByUserId: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  reports?: Prisma.ReportCreateNestedManyWithoutCustomerInput;
  // reports?: Prisma.ReportCreateNestedManyWithoutCustomerInput;
  customerProducts?: Prisma.CustomerProductCreateNestedManyWithoutCustomerInput;
}
