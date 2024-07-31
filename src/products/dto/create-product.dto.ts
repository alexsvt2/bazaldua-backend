import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateProductDto implements Prisma.ProductCreateInput {
  @IsString()
  model: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  // updatedAt: Date | string;
  //
  // createdAt: Date | string;
  //
  // maintenances: Prisma.MaintenanceCreateNestedManyWithoutProductInput;
  //
  // productInstances: Prisma.ProductInstanceCreateNestedManyWithoutProductInput;
}
