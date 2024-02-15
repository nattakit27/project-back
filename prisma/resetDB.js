const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database project-dental')
  await prisma.$executeRawUnsafe('CREATE Database project-dental')
}
console.log('Reset DB')
run()