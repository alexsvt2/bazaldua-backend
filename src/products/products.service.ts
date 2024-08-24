import { type ExtendedPrismaClient } from 'src/prisma.extension';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Inject, Injectable } from '@nestjs/common';
import { CustomPrismaService } from 'nestjs-prisma';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PrismaService')
    private prismaService: CustomPrismaService<ExtendedPrismaClient>,
  ) { }

  create(createProductDto: CreateProductDto) {
    return this.prismaService.client.product.create({
      data: {
        ...createProductDto,
      },
    });
  }

  async findAll(paginationQuery: { page: number; limit: number }) {
    const [items, meta] = await this.prismaService.client.product.paginate({
      // The Missing Gem
      // where: {
      //   brand: {
      //     contains: 'Brand A',
      //   }
      // }
    }).withPages({})

    return {
      items,
      meta,
    }
  }

  findOne(id: number) {
    return this.prismaService.client.product.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.client.product.update({
      where: {
        id,
      },
      data: {
        ...updateProductDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.client.product.delete({
      where: {
        id,
      },
    });
  }
}
