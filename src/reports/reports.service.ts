import { Inject, Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { CustomPrismaService, PrismaService } from 'nestjs-prisma';
import { ExtendedPrismaClient } from 'src/prisma.extension';

@Injectable()
export class ReportsService {
  constructor(    @Inject('PrismaService')
  private prismaService: CustomPrismaService<ExtendedPrismaClient>,) {}
  
  create(createReportDto: any) {
    return this.prismaService.client.report.create({
      data: {
        customerId: createReportDto.customerId,
        userId: createReportDto.userId,
        observationsEngineer: createReportDto.observationsEngineer,
        observationsCustomer: createReportDto.observationsCustomer,
        serviceType: createReportDto.serviceType,
        reportType: createReportDto.reportType,
        status: createReportDto.status,
        reportItems: {
          create: createReportDto.reportItems.map((item) => ({
            customerProductId: item.customerProductId,
            observations: item.observations,
          })),
        },
      },
    });
  }

  async findAll() {
    const [items, meta] = await this.prismaService.client.report.paginate().withPages({});

    return {
      items,
      meta,
    }
  }

  findOne(id: number) {
    return this.prismaService.client.report.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return this.prismaService.client.report.update({
      where: {
        id,
      },
      data: {
        ...updateReportDto,
      },
    });
  }

  async remove(id: number) {
    await this.prismaService.client.reportItem.deleteMany({
      where: { reportId: id },
    });
    return this.prismaService.client.report.delete({
      where: { id: id },
    });
  }
}
