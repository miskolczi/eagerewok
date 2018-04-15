import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Skill, Category, UserSkill, SkillCategory } from '../_models/skill';

@Injectable()
export class SkillService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Skill[]>('/api/skills');
    }

    getById(id: number) {
        return this.http.get('/api/skills/' + id);
    }

    create(skill: Skill) {
        return this.http.post('/api/skills', skill);
    }

    update(skill: Skill) {
        return this.http.put('/api/skills/' + skill.id, skill);
    }

    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id);
    // }
}