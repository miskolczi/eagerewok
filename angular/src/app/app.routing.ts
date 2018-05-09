import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { OrganizationComponent } from './organization/organization.component';
import { AuthGuard } from './_guards/index';

import { ProfileComponent, IndexComponent } from './profile/index';

const appRoutes: Routes = [
    // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'home', component: OrganizationComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'projects', component: ProjectComponent, canActivate: [AuthGuard]},

    { path: 'skill', component: SkillComponent, canActivate: [AuthGuard]},
    { path: 'skills', component: SkillComponent, canActivate: [AuthGuard]},

    { path: 'users', component: IndexComponent, canActivate: [AuthGuard]},
    { path: 'user', component: ProfileComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);