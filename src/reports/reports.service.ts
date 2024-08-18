import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReportsService {
  constructor(private prismaService: PrismaService) {}

  create(createReportDto: CreateReportDto) {
    return this.prismaService.report.create({
      data: {
        ...createReportDto,
      },
    });
  }

  findAll() {
    return this.prismaService.report.findMany();
  }

  findOne(id: number) {
    return this.prismaService.report.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return this.prismaService.report.update({
      where: {
        id,
      },
      data: {
        ...updateReportDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.report.delete({
      where: {
        id,
      },
    });
  }
}
