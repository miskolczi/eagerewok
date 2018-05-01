import { Component, OnInit } from '@angular/core';
import { Skill, User } from '../_models/index';
import { SkillService } from '../_services/index';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements OnInit {

    skills: Skill[] = [];
    skill = null;
    skillUsers = []
    skillProjects = []

    constructor(private skillService: SkillService) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        // this.loadAllSkills();
        this.loadSkill(1);
        this.loadSkillUsers()
        this.loadSkillProjects()
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

    private loadSkill(id: number) {
        this.skill = new Skill(id, "MIG Welding");
    }

    private loadAllSkills() {
        this.skillService.getAll().subscribe(skills => { this.skills = skills; });
    }

    // export class User {
    //     id: number;
    //     username: string;
    //     password: string;
    //     first_name: string;
    //     last_name: string;
    //     email: string;
    //     phone: string;
    // }

    private loadSkillProjects(){
        this.skillProjects = [
            {
                name: 'Jyn 99: Space Marines',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
            },
            {
                name: 'Jyn 11: Space Marines',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
            },
            {
                name: 'Jyn 20: Space Marines',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
            },
        ]
    }

    private loadSkillUsers(){
        this.skillUsers = [
            {
                user: new User(1, 'ewok1', 'password', 'asd', 'asd', 'ewok1@asd.com', '202-555-1234'),
                pic: 'assets/ewok1.png',
                proficiency: 8,
                endorsements: [
                    '10 out of 10, would hire again',
                    'awesome team member'
                ],
                projects: [
                    'Jyn 99: Space Marines',
                    'Jyn 11: Hack all the Things',
                ]
            },{
                user: new User(2, 'ewok2', 'password', 'sdf', 'sdf', 'ewok1@asd.com', '202-555-2345'),
                pic: 'assets/ewok2.png',
                proficiency: 2,
                endorsements: [
                    'hard worker but a bit green',
                ],
                projects: [
                    'Jyn 20: Reck all the Things',
                ]
            }
        ]
    }
}
