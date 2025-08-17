import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
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
export declare class ActivitiesService {
    private activities;
    create(dto: CreateActivityDto): Activity;
    findAll(): Activity[];
    findOne(id: string): Activity;
    update(id: string, dto: UpdateActivityDto): Activity;
    remove(id: string): {
        ok: boolean;
    };
}
export {};
