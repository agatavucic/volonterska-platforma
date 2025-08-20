import { PrismaService } from '../prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
export declare class ActivitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateActivityDto): import("@prisma/client").Prisma.Prisma__ActivityClient<{
        title: string;
        description: string;
        city: string;
        startAt: Date;
        endAt: Date;
        category: string | null;
        organizationId: string;
        id: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        description: string;
        city: string;
        startAt: Date;
        endAt: Date;
        category: string | null;
        organizationId: string;
        id: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        description: string;
        city: string;
        startAt: Date;
        endAt: Date;
        category: string | null;
        organizationId: string;
        id: string;
        createdAt: Date;
    }>;
    update(id: string, dto: UpdateActivityDto): Promise<{
        title: string;
        description: string;
        city: string;
        startAt: Date;
        endAt: Date;
        category: string | null;
        organizationId: string;
        id: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        description: string;
        city: string;
        startAt: Date;
        endAt: Date;
        category: string | null;
        organizationId: string;
        id: string;
        createdAt: Date;
    }>;
}
