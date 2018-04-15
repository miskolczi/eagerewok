import { Component, OnInit } from '@angular/core';
import { Skill } from '../_models/index';
import { SkillService } from '../_services/index';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements OnInit {

    skills: Skill[] = [];

    constructor(private skillService: SkillService) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllSkills();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

    private loadAllSkills() {
        this.skillService.getAll().subscribe(skills => { this.skills = skills; });
    }
}
