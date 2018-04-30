export class Availability {
    id: number;
    weekof: string;
    availability: number;

    constructor(id: number, weekof: string, availability: number) {
        this.id = id;
        this.weekof = weekof;
        this.availability = availability;
    }
}

export class Tag {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class Skill {
    id: number;
    name: string;
    proficiency: number;

    constructor(id: number, name: string, proficiency: number) {
        this.id = id;
        this.name = name;
        this.proficiency = proficiency;
    }
}

export enum EducationType{'military', 'civilian'}

export class Education {
    id: number;
    name: string;
    institution: string;
    type: EducationType;

    constructor(id: number, name: string, institution: string, type: EducationType) {
        this.id = id;
        this.name = name;
        this.institution = institution;
        this.type = type;
    }
}

export class Project {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}