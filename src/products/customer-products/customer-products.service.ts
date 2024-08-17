import { Injectable } from '@nestjs/common';
import { CreateCustomerProductDto } from './dto/create-customer-product.dto';
// import { UpdateCustomerProductDto } from './dto/update-customer-product.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CustomerProductsService {
  constructor(private prismaService: PrismaService) {}

  // create(createCustomerProductDto: CreateCustomerProductDto) {
  //   return 'This action adds a new customerProduct';
  // }
  //
  // findAll() {
  //   return `This action returns all customerProducts`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} customerProduct`;
  // }
  //
  // update(id: number, updateCustomerProductDto: UpdateCustomerProductDto) {
  //   return `This action updates a #${id} customerProduct`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} customerProduct`;
  // }
  create(createProductInstanceDto: CreateCustomerProductDto) {
    return this.prismaService.customerProduct.create({
      data: {
        ...createProductInstanceDto,
      },
    });
  }

  findAllProductInstances() {
    return this.prismaService.customerProduct.findMany({
      include: {
        product: true,
        customer: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.customerProduct.findMany({
      where: {
        id: id,
      },
      include: {
        orderItems: true,
      },
    });
  }

  findProductInstancesByProductId(id: number) {
    return this.prismaService.customerProduct.findMany({
      where: {
        productId: id,
      },
    });
  }

  findProductInstancesByClientId(id: number) {
    return this.prismaService.customerProduct.findMany({
      where: {
        customerId: id,
      },
      include: {
        product: true,
        customer: true,
        orderItems: true,
      },
    });
  }
}
