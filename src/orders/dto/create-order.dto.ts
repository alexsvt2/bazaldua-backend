import { $Enums, Prisma } from '@prisma/client';

export class CreateOrderDto implements Prisma.OrderCreateInput {
  observationsEngineer?: string;
  observationsCustomer?: string;
  serviceType: $Enums.ServiceType;
  reportType: $Enums.ReportType;
  status: $Enums.OrderStatus;
  date?: string | Date;
  observations?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
  user: Prisma.UserCreateNestedOneWithoutOrdersInput;
  orderItems?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
}
