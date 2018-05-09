import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { 
    AlertService, 
    AuthenticationService, 
    UserService,
    SkillService 
} from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { SkillComponent } from './skill/skill.component';
import { ProfileComponent } from './profile/entry/profile.component';
import { ProjectComponent } from './project/project.component';
import { OrganizationComponent } from './organization/organization.component';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { IndexComponent } from './profile/index/index.component';

// http://www.devglan.com/angular/angular-data-table-example
import { CommonModule } from '@angular/common';

// https://material.angular.io/guide/getting-started
import {
    MatInputModule, 
    MatTableModule, 
    MatToolbarModule, 
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// https://stackoverflow.com/questions/48184079/include-fortawesome-fontawesome-to-angular-cli-project
// import fontawesome from '@fortawesome/fontawesome'
// import faUser from '@fortawesome/fontawesome-free-solid/faUser'
// import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'

// fontawesome.library.add(faUser)
// fontawesome.library.add(faCircle)

const modules = [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FilterPipeModule,
    routing,
    MatInputModule, 
    MatTableModule, 
    MatToolbarModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatFormFieldModule,
    BrowserAnimationsModule
];

@NgModule({
    imports: [modules],
    // exports: [modules],    
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SkillComponent,
        ProfileComponent,
        ProjectComponent,
        OrganizationComponent,
        IndexComponent,
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        SkillService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent],
    // schemas: [NO_ERRORS_SCHEMA]
})

export class AppModule { }