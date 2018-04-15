export class Skill {
    id: number;
    name: string;
    reviewed: string;
    created: string;
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
}

export class SkillCategory {
    id: number;
    category: number;
    skill: number;
}