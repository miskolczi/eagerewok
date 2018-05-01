export class Project {
    id: number;
    name: string;
    created: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }        
}

export class ProjectSkill {
    id: number;
    project: number;
    skill: number;

    constructor(id: number, project: number, skill: number) {
        this.id = id;
        this.project = project;
        this.skill = skill;
    }    
}
