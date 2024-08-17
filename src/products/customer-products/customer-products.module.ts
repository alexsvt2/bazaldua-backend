import { Module } from '@nestjs/common';
import { CustomerProductsService } from './customer-products.service';
import { CustomerProductsController } from './customer-products.controller';

@Module({
  controllers: [CustomerProductsController],
  providers: [CustomerProductsService],
})
export class CustomerProductsModule {}
