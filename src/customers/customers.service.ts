import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomPrismaService, PrismaService } from 'nestjs-prisma';
import { ExtendedPrismaClient } from 'src/prisma.extension';

@Injectable()
export class CustomersService {
  @Inject('PrismaService')
  private prismaService: CustomPrismaService<ExtendedPrismaClient>,

  create(createCustomerDto: CreateCustomerDto) {
    return this.prismaService.client.customer.create({
      data: {
        ...createCustomerDto,
      },
    });
  }

  findAll() {
    return this.prismaService.client.customer.findMany();
  }

  findOne(id: number) {
    return this.prismaService.client.customer.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.prismaService.client.customer.update({
      where: {
        id,
      },
      data: {
        ...updateCustomerDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.client.customer.delete({
      where: {
        id,
      },
    });
  }
}
