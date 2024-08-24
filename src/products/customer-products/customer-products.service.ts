import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerProductDto } from './dto/create-customer-product.dto';
// import { UpdateCustomerProductDto } from './dto/update-customer-product.dto';
import { CustomPrismaService, PrismaService } from 'nestjs-prisma';
import { ExtendedPrismaClient } from 'src/prisma.extension';

@Injectable()
export class CustomerProductsService {
  constructor(@Inject('PrismaService')
  private prismaService: CustomPrismaService<ExtendedPrismaClient>) {}
  
  create(createProductInstanceDto: CreateCustomerProductDto) {
    return this.prismaService.client.customerProduct.create({
      data: {
        ...createProductInstanceDto,
      },
    });
  }

  findAllProductInstances() {
    return this.prismaService.client.customerProduct.findMany({
      include: {
        product: true,
        customer: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.client.customerProduct.findMany({
      where: {
        id: id,
      },
      include: {
        reportItems: true,
      },
    });
  }

  findProductInstancesByProductId(id: number) {
    return this.prismaService.client.customerProduct.findMany({
      where: {
        productId: id,
      },
    });
  }

  findProductInstancesByClientId(id: number) {
    return this.prismaService.client.customerProduct.findMany({
      where: {
        customerId: id,
      },
      include: {
        product: true,
        customer: true,
        reportItems: true,
      },
    });
  }
}
