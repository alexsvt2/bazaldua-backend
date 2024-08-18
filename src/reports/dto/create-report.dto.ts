import { $Enums, Prisma } from '@prisma/client';

export class CreateReportDto implements Prisma.ReportCreateInput {
  observationsEngineer?: string;
  observationsCustomer?: string;
  serviceType: $Enums.ServiceType;
  reportType: $Enums.ReportType;
  status: $Enums.ReportStatus;
  date?: string | Date;
  observations?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  customer: Prisma.CustomerCreateNestedOneWithoutReportsInput;
  user: Prisma.UserCreateNestedOneWithoutReportsInput;
  reportItems?: Prisma.ReportItemCreateNestedManyWithoutReportInput;
}
