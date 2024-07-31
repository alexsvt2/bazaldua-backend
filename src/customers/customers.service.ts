import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prismaService: PrismaService) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.prismaService.customer.create({
      data: {
        ...createCustomerDto,
      },
    });
  }

  findAll() {
    return this.prismaService.customer.findMany();
  }

  findOne(id: number) {
    return this.prismaService.customer.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.prismaService.customer.update({
      where: {
        id,
      },
      data: {
        ...updateCustomerDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.customer.delete({
      where: {
        id,
      },
    });
  }
}
