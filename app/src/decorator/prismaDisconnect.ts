import client from '@/prisma-client';

export function prismaDisconnect(...args: any[]) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      await client.$connect();
      try {
        const result = await originalMethod.apply(this, args);

        await client.$disconnect();

        return result;
      } catch (error) {
        await client.$disconnect();

        throw error;
      }
    };

    return descriptor;
  };
}
