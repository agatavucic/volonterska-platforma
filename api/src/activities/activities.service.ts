import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateActivityDto) {
    return this.prisma.activity.create({
      data: {
        title: dto.title,
        description: dto.description,
        city: dto.city,
        startAt: new Date(dto.startAt),
        endAt: new Date(dto.endAt),
        category: dto.category ?? null,
        organizationId: dto.organizationId,
      },
    });
  }

  findAll() {
    return this.prisma.activity.findMany();
  }

  async findOne(id: string) {
    const activity = await this.prisma.activity.findUnique({ where: { id } });
    if (!activity) throw new NotFoundException('Activity not found');
    return activity;
  }

  async update(id: string, dto: UpdateActivityDto) {
    // ako trebaš validne datume:
    const data: any = { ...dto };
    if (dto.startAt) data.startAt = new Date(dto.startAt as any);
    if (dto.endAt) data.endAt = new Date(dto.endAt as any);

    return this.prisma.activity.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.activity.delete({ where: { id } });
  }
}
