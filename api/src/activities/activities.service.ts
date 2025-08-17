import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { randomUUID } from 'crypto';

type Activity = {
  id: string;
  title: string;
  description: string;
  city: string;
  startAt: string;
  endAt: string;
  category?: string;
  createdAt: string;
};

@Injectable()
export class ActivitiesService {
  private activities: Activity[] = [
    {
      id: randomUUID(),
      title: 'Podjela obroka',
      description: 'Pomoć u pučkoj kuhinji',
      city: 'Zagreb',
      startAt: new Date().toISOString(),
      endAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
      category: 'Solidarnost',
      createdAt: new Date().toISOString(),
    },
  ];

  create(dto: CreateActivityDto) {
    const activity: Activity = { id: randomUUID(), createdAt: new Date().toISOString(), ...dto };
    this.activities.unshift(activity);
    return activity;
  }

  findAll() {
    return this.activities;
  }

  findOne(id: string) {
    const a = this.activities.find(x => x.id === id);
    if (!a) throw new NotFoundException('Activity not found');
    return a;
  }

  update(id: string, dto: UpdateActivityDto) {
    const idx = this.activities.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Activity not found');
    this.activities[idx] = { ...this.activities[idx], ...dto };
    return this.activities[idx];
  }

  remove(id: string) {
    const before = this.activities.length;
    this.activities = this.activities.filter(x => x.id !== id);
    if (this.activities.length === before) throw new NotFoundException('Activity not found');
    return { ok: true };
  }
}
