import {Component, OnInit, ViewChild} from '@angular/core';
import {Skill, User} from '../../_models/index';
import {Router} from '@angular/router';

import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	users_composite: Element[];
    // router = Router;
	columnsToDisplay = ['user_id', 'user_first_name', 'user_last_name', 'user_email'];
	dataSource: MatTableDataSource<Element>;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private router: Router) { }

	ngOnInit() {
		this.loadUsers();
		this.dataSource = new MatTableDataSource(this.users_composite);
	}

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    private applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    private loadUsers(){
        this.users_composite = [
            {
                user: new User(1, 'ewok1', 'password', 'asd', 'asd', 'ewok1@asd.com', '202-555-1234'),
                pic: 'assets/ewok1.png',
                // proficiency: 8,
                endorsements: [
                    '10 out of 10, would hire again',
                    'awesome team member'
                ],
                projects: [
                    'Jyn 99: Space Marines',
                    'Jyn 11: Hack all the Things',
                ]
            },{
                user: new User(2, 'ewok2', 'password', 'sdf', 'sdf', 'ewok2@asd.com', '202-555-2345'),
                pic: 'assets/ewok2.png',
                // proficiency: 2,
                endorsements: [
                    'hard worker but a bit green',
                ],
                projects: [
                    'Jyn 20: Reck all the Things',
                ]
            },{
                user: new User(2, 'ewok3', 'password', 'sdf', 'sdf', 'ewok3@asd.com', '202-555-2345'),
                pic: 'assets/ewok3.png',
                // proficiency: 2,
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

export interface Element {
	user: User;
	pic: string;
	endorsements: Array<string>;
	projects: Array<string>;
}
