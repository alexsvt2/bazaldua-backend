import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CustomerProductsModule } from './customer-products/customer-products.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [CustomerProductsModule],
})
export class ProductsModule {}
