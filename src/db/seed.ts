import { PrismaClient } from "@/generated/prisma";
import sampleData from "./sample-data";

const seed = async () => {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.product.createMany({
    data: sampleData.products,
  });

  await prisma.user.createMany({
    data: sampleData.users,
  });

  await console.log("Database seeded successfully");
};

seed();
