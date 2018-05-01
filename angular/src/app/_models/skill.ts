export class Skill {
    id: number;
    name: string;
    reviewed: Date;
    created: string;

    constructor(id: number, name: string, reviewed: Date = null) {
        this.id = id;
        this.name = name;
        this.reviewed = reviewed;
    }    
}

export class Category {
    id: number;
    name: string;
    reviewed: string;
    created: string;
}

export class UserSkill {
    id: number;
    user: number;
    skill: number;
    proficiency: number;

    constructor(id: number, user: number, skill: number, proficiency: number = 0) {
        this.id = id;
        this.user = user;
        this.skill = skill;
        this.proficiency = proficiency;
    }    
}

export class SkillCategory {
    id: number;
    category: number;
    skill: number;
}
