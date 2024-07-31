import { Prisma } from '@prisma/client';

export class CreateOrderDto implements Prisma.OrderCreateInput {
  customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
  orderNumber: string;
  user: Prisma.UserCreateNestedOneWithoutOrdersInput;
}
