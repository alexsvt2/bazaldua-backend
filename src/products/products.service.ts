import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'nestjs-prisma';
// import { CreateCustomerProductDto } from './customer-products/dto/create-customer-product.dto';
// import { CreateCustomerProductDto } from './dto/create-customer-product';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({
      data: {
        ...createProductDto,
      },
    });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: number) {
    return this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: {
        id,
      },
      data: {
        ...updateProductDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}
