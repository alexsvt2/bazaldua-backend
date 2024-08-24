import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CustomPrismaService, PrismaService } from 'nestjs-prisma';
import { ExtendedPrismaClient } from 'src/prisma.extension';

@Injectable()
export class UsersService {
  constructor(    @Inject('PrismaService')
  private prismaService: CustomPrismaService<ExtendedPrismaClient>,) {}

  create(createUserDto: CreateUserDto) {
    return this.prismaService.client.user.create({
      data: {
        ...createUserDto,
      },
    });
  }

  findAll() {
    return this.prismaService.client.user.findMany();
  }

  findOne(id: number) {
    return this.prismaService.client.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.client.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.client.user.delete({
      where: {
        id,
      },
    });
  }

  // TODO: Add Change User Status Should Receive a Boolean and the UserId
}
