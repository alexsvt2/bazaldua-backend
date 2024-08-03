import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'User One',
      password: 'password1',
      role: Role.ADMIN,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      name: 'User Two',
      password: 'password2',
      role: Role.ADMIN,
    },
  });

  const customer1 = await prisma.customer.create({
    data: {
      name: 'Customer One',
      email: 'customer1@example.com',
      phone: '1234567890',
      address: '123 Main St',
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: 'Customer Two',
      email: 'customer2@example.com',
      phone: '0987654321',
      address: '456 Elm St',
    },
  });

  const product1 = await prisma.product.create({
    data: {
      name: 'Product One',
      model: 'Model A',
      description: 'Description for Product One',
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Product Two',
      model: 'Model B',
      description: 'Description for Product Two',
    },
  });

  const productInstance1 = await prisma.productInstance.create({
    data: {
      serialNumber: 'SN001',
      productId: product1.id,
    },
  });

  const productInstance2 = await prisma.productInstance.create({
    data: {
      serialNumber: 'SN002',
      productId: product2.id,
    },
  });

  const order1 = await prisma.order.create({
    data: {
      customerId: customer1.id,
      userId: user1.id,
      observations: 'First order observation',
    },
  });

  const order2 = await prisma.order.create({
    data: {
      customerId: customer2.id,
      userId: user2.id,
      observations: 'Second order observation',
    },
  });

  await prisma.orderItem.create({
    data: {
      orderId: order1.id,
      productInstanceId: productInstance1.id,
      observations: 'Order item 1 observation',
    },
  });

  await prisma.orderItem.create({
    data: {
      orderId: order2.id,
      productInstanceId: productInstance2.id,
      observations: 'Order item 2 observation',
    },
  });

  await prisma.maintenance.create({
    data: {
      productInstanceId: productInstance1.id,
      details: 'First maintenance details',
      productId: product1.id,
    },
  });

  await prisma.maintenance.create({
    data: {
      productInstanceId: productInstance2.id,
      details: 'Second maintenance details',
      productId: product2.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
