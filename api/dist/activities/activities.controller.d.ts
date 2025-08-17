import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    create(dto: CreateActivityDto): {
        id: string;
        title: string;
        description: string;
        city: string;
        startAt: string;
        endAt: string;
        category?: string;
        createdAt: string;
    };
    findAll(): {
        id: string;
        title: string;
        description: string;
        city: string;
        startAt: string;
        endAt: string;
        category?: string;
        createdAt: string;
    }[];
    findOne(id: string): {
        id: string;
        title: string;
        description: string;
        city: string;
        startAt: string;
        endAt: string;
        category?: string;
        createdAt: string;
    };
    update(id: string, dto: UpdateActivityDto): {
        id: string;
        title: string;
        description: string;
        city: string;
        startAt: string;
        endAt: string;
        category?: string;
        createdAt: string;
    };
    remove(id: string): {
        ok: boolean;
    };
}
