"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ActivitiesService = class ActivitiesService {
    activities = [
        {
            id: (0, crypto_1.randomUUID)(),
            title: 'Podjela obroka',
            description: 'Pomoć u pučkoj kuhinji',
            city: 'Zagreb',
            startAt: new Date().toISOString(),
            endAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
            category: 'Solidarnost',
            createdAt: new Date().toISOString(),
        },
    ];
    create(dto) {
        const activity = { id: (0, crypto_1.randomUUID)(), createdAt: new Date().toISOString(), ...dto };
        this.activities.unshift(activity);
        return activity;
    }
    findAll() {
        return this.activities;
    }
    findOne(id) {
        const a = this.activities.find(x => x.id === id);
        if (!a)
            throw new common_1.NotFoundException('Activity not found');
        return a;
    }
    update(id, dto) {
        const idx = this.activities.findIndex(x => x.id === id);
        if (idx === -1)
            throw new common_1.NotFoundException('Activity not found');
        this.activities[idx] = { ...this.activities[idx], ...dto };
        return this.activities[idx];
    }
    remove(id) {
        const before = this.activities.length;
        this.activities = this.activities.filter(x => x.id !== id);
        if (this.activities.length === before)
            throw new common_1.NotFoundException('Activity not found');
        return { ok: true };
    }
};
exports.ActivitiesService = ActivitiesService;
exports.ActivitiesService = ActivitiesService = __decorate([
    (0, common_1.Injectable)()
], ActivitiesService);
//# sourceMappingURL=activities.service.js.map