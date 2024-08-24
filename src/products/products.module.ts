import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CustomerProductsModule } from './customer-products/customer-products.module';
import { CustomPrismaModule, CustomPrismaService, PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService
  ],
  imports: [
    CustomPrismaModule,
    CustomerProductsModule],
})
export class ProductsModule {}
