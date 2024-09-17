import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  // export class CreateProductDto implements Prisma.ProductCreateInput {
  

  @IsString()
  @IsOptional()
  model?: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  brand?: string;

  // updatedAt: Date | string;
  //
  // createdAt: Date | string;
  //
  // maintenances: Prisma.MaintenanceCreateNestedManyWithoutProductInput;
  //
  // productInstances: Prisma.ProductInstanceCreateNestedManyWithoutProductInput;
}
