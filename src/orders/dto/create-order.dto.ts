import { Prisma } from '@prisma/client';

export class CreateOrderDto implements Prisma.OrderCreateInput {
  date?: string | Date;
  observations?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
  user: Prisma.UserCreateNestedOneWithoutOrdersInput;
  orderItems?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
}
