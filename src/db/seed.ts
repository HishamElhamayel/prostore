import { PrismaClient } from "@/generated/prisma";
import sampleData from "./sample-data";

const seed = async () => {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: sampleData.products,
  });

  console.log("Database seeded successfully");
};

seed();
