import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: 'securepassword',
      role: 'ADMIN',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'tech@example.com',
      name: 'Technician User',
      password: 'securepassword',
      role: 'TECHNICIAN',
    },
  });

  // Create Customers
  const customer1 = await prisma.customer.create({
    data: {
      name: 'Customer One',
      createdByUserId: user1.id, // Updated to createdByUserId
      email: 'customer1@example.com',
      phone: '123-456-7890',
      address: '123 Main St',
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: 'Customer Two',
      createdByUserId: user2.id, // Updated to createdByUserId
      email: 'customer2@example.com',
      phone: '098-765-4321',
      address: '456 Elm St',
    },
  });

  // Create Products
  const product1 = await prisma.product.create({
    data: {
      name: 'Product One',
      brand: 'Brand A',
      model: 'Model X',
      description: 'Description for product one.',
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Product Two',
      brand: 'Brand B',
      model: 'Model Y',
      description: 'Description for product two.',
    },
  });

  // Create Customer Products
  const customerProduct1 = await prisma.customerProduct.create({
    data: {
      serialNumber: 'SN12345',
      internalControl: 'IC123',
      tecnoControl: 'TC123',
      productId: product1.id,
      customerId: customer1.id,
    },
  });

  const customerProduct2 = await prisma.customerProduct.create({
    data: {
      serialNumber: 'SN67890',
      internalControl: 'IC456',
      tecnoControl: 'TC456',
      productId: product2.id,
      customerId: customer2.id,
    },
  });

  // Create Reports
  const report1 = await prisma.report.create({
    data: {
      customerId: customer1.id,
      userId: user1.id,
      observationsEngineer: 'Engineer observations for report one.',
      observationsCustomer: 'Customer observations for report one.',
      serviceType: 'PREVENTIVE',
      reportType: 'WARRANTY',
      status: 'PENDING',
    },
  });

  const report2 = await prisma.report.create({
    data: {
      customerId: customer2.id,
      userId: user2.id,
      observationsEngineer: 'Engineer observations for report two.',
      observationsCustomer: 'Customer observations for report two.',
      serviceType: 'CORRECTIVE',
      reportType: 'BILLABLE',
      status: 'IN_PROGRESS',
    },
  });

  // Create Report Items
  await prisma.reportItem.create({
    data: {
      reportId: report1.id,
      customerProductId: customerProduct1.id,
      observations: 'Observation for report item one.',
    },
  });

  await prisma.reportItem.create({
    data: {
      reportId: report2.id,
      customerProductId: customerProduct2.id,
      observations: 'Observation for report item two.',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
