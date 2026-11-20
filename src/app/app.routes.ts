import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ContactUs } from './pages/contact-us/contact-us';
import { CourseDetails } from './pages/course-details/course-details';
import { CoursesList } from './pages/courses-list/courses-list';
import { Messeges } from './pages/messeges/messeges';
import { navbar } from './pages/navbar/navbar';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'ContactUs', component: ContactUs },
    { path: 'CourseDetails/:id', component: CourseDetails },
    { path: 'CoursesList', component: CoursesList },
    { path: 'Messeges', component: Messeges },
    { path: 'course-details/:id', component: CourseDetails },
    { path: '**', component: NotFound },


];
