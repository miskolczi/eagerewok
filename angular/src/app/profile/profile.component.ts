import {Component, OnInit} from '@angular/core';
import {
    Availability, 
    Category, 
    Education, 
    EducationType, 
    Project, 
    Skill, 
    SkillCategory,
    Tag, 
    UserSkill, 
} from '../_models/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

	availabilities: Availability[] = [];
    educations: Education[] = [];
    projects: Project[] = [];
    EducationType = EducationType;    // enum export to template
    user_id = -1;
    // console = console

    // temp
    userskills: UserSkill[] = [];
	skills: Skill[] = [];

	constructor() { }

    ngOnInit() {
        this.user_id = 1;    // temp
        this.loadAllAvailabilities();
        this.loadAllEducation();
        this.loadAllProjects();
        this.loadAllSkills();
    }

    public getSkillProficiencyColor(proficiency: number){
    	let stylez = {
    		'bg-danger': false,
    		'bg-warning': false,
    		'bg-success': false,
    		'bg-info': false,
    	}

    	if(proficiency > 7.5)
    		stylez["bg-info"] = true
    	else if(proficiency > 5.0)
    		stylez["bg-success"] = true
    	else if(proficiency > 2.5)
    		stylez["bg-warning"] = true
    	else
    		stylez["bg-danger"] = true
    	
    	return(stylez)
    }

    private loadAllAvailabilities() {
        // this.userService.getAll().subscribe(users => { this.users = users; });
        this.availabilities = [
			new Availability(1, '4/13', 50),
			new Availability(2, '4/20', 20),
			new Availability(3, '4/27', 100),
			new Availability(4, '5/4', 100),
			new Availability(5, '5/11', 0),
			new Availability(6, '5/18', 0),
        ]
    }

    private loadAllSkills() {
        // this.userService.getAll().subscribe(users => { this.users = users; });
        this.skills = [
            new Skill(1, 'html5'), 
            new Skill(2, 'react'), 
            new Skill(3, 'angularjs'), 
            new Skill(4, 'css3'), 
            new Skill(5, 'jquery'), 
            new Skill(6, 'bootstrap')
        ]

        this.userskills = [
			new UserSkill(1, this.user_id, 1, 4), 
			new UserSkill(2, this.user_id, 2, 1), 
			new UserSkill(3, this.user_id, 3, 8), 
			new UserSkill(4, this.user_id, 4, 7), 
			new UserSkill(5, this.user_id, 5, 6), 
			new UserSkill(6, this.user_id, 6, 7)
        ]
    }

    private loadAllProjects() {
        // this.userService.getAll().subscribe(users => { this.users = users; });
        this.projects = [
			new Project(1, 'Jyn 1'), 
			new Project(2, 'Jyn 3'), 
        ]
    }

    private loadAllEducation() {
        // this.userService.getAll().subscribe(users => { this.users = users; });
        this.educations = [
			new Education(1, 'BS - Mech Eng.', 'UNLV', EducationType.civilian), 
			new Education(2, 'CYBOLC', 'Army', EducationType.military), 
        ]
    }


}
