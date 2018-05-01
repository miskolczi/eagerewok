import { Component, OnInit } from '@angular/core';
import {Skill} from '../_models/index';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
	skills: Skill[] = [];
	members = [];

	constructor() {}

	ngOnInit() {
		this.loadAllSkills()
		this.members = ["assets/ewok1.png", "assets/ewok2.png", "assets/ewok3.png", ]
	}

	private loadAllSkills() {
	// this.userService.getAll().subscribe(users => { this.users = users; });
		let tags = [
			"Optimization", "Harmonic Analysis", "Number Theory", "Complex Analysis", "Linear Algebra", "Topological Data Analysis", "ODE / PDE", "Abstract Algebra", "Graph Theory", "Discrete Math"
		]
		// console.log(tags.length)
		for(var i = 0; i < tags.length; i++){
			this.skills.push(new Skill(i, tags[i]))
		}
	}
}
