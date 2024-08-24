import { PrismaClient } from '@prisma/client';
// import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Hash passwords
  // const adminPassword = await bcrypt.hash('securepassword', 10);
  // const techPassword = await bcrypt.hash('securepassword', 10);

  // Create users
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
      name: 'Tech User',
      password: 'securepassword',
      role: 'TECHNICIAN',
    },
  });

  // Create customers
  const customer1 = await prisma.customer.create({
    data: {
      name: 'Customer One',
      userId: user1.id.toString(),
      email: 'customer1@example.com',
      phone: '123-456-7890',
      address: '123 Main St, City, Country',
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: 'Customer Two',
      userId: user2.id.toString(),
      email: 'customer2@example.com',
      phone: '098-765-4321',
      address: '456 Secondary St, City, Country',
    },
  });

  // Create products
  const product1 = await prisma.product.create({
    data: {
      name: 'Microscope',
      brand: 'Brand A',
      model: 'Model X',
      description: 'A high-quality microscope for scientific use.',
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Telescope',
      brand: 'Brand B',
      model: 'Model Y',
      description: 'A powerful telescope for astronomical observations.',
    },
  });

  // Create customer products
  const customerProduct1 = await prisma.customerProduct.create({
    data: {
      serialNumber: '12345',
      internalControl: 'IC-001',
      tecnoControl: 'TC-001',
      product: {
        connect: { id: product1.id },
      },
      customer: {
        connect: { id: customer1.id },
      },
    },
  });

  const customerProduct2 = await prisma.customerProduct.create({
    data: {
      serialNumber: '67890',
      internalControl: 'IC-002',
      tecnoControl: 'TC-002',
      product: {
        connect: { id: product2.id },
      },
      customer: {
        connect: { id: customer2.id },
      },
    },
  });

  // Create reports
  const report1 = await prisma.report.create({
    data: {
      customer: {
        connect: { id: customer1.id },
      },
      user: {
        connect: { id: user1.id },
      },
      serviceType: 'PREVENTIVE',
      reportType: 'WARRANTY',
      status: 'PENDING',
      observationsEngineer: 'Initial checkup required.',
      observationsCustomer: 'Please ensure careful handling.',
    },
  });

  const report2 = await prisma.report.create({
    data: {
      customer: {
        connect: { id: customer2.id },
      },
      user: {
        connect: { id: user2.id },
      },
      serviceType: 'CORRECTIVE',
      reportType: 'INVOICABLE',
      status: 'IN_PROGRESS',
      observationsEngineer: 'Part replacement needed.',
      observationsCustomer: 'Speedy service requested.',
    },
  });

  // Create report items
  await prisma.reportItem.create({
    data: {
      report: {
        connect: { id: report1.id },
      },
      customerProduct: {
        connect: { id: customerProduct1.id },
      },
      observations: 'Product requires cleaning.',
    },
  });

  await prisma.reportItem.create({
    data: {
      report: {
        connect: { id: report2.id },
      },
      customerProduct: {
        connect: { id: customerProduct2.id },
      },
      observations: 'Product requires calibration.',
    },
  });

  console.log('Seed data created successfully.');
}

main()
  .catch((e) => {
    console.error('Error while seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
