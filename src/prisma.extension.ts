// prisma.extension.ts
import { PrismaClient } from '@prisma/client';
import pagination from 'prisma-extension-pagination';

// pagination for all models
export const extendedPrismaClient = new PrismaClient().$extends(
    pagination({
        pages: {
            limit: 10,
            includePageCounts: true
        },
        cursor: {
            limit: 10
        }
    })
);

export type ExtendedPrismaClient = typeof extendedPrismaClient;