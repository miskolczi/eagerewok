import { Component, OnInit } from '@angular/core';
import {Availability, Tag, Education, EducationType, Project, Skill} from '../_models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

	availabilities: Availability[] = [];
	skills: Skill[] = [];
	educations: Education[] = [];
	projects: Project[] = [];
	EducationType = EducationType;	// enum export to template

	constructor() { }

    ngOnInit() {
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
			new Skill(1, 'html5', 4), 
			new Skill(2, 'react', 1), 
			new Skill(3, 'angularjs', 8), 
			new Skill(4, 'css3', 7), 
			new Skill(5, 'jquery', 6), 
			new Skill(6, 'bootstrap', 7)
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
