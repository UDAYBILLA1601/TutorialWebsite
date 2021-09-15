import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './header/assignments/assignments.component';
import { CourseComponent } from './header/course/course.component';
import { HomeComponent } from './header/home/home.component';

const routes : Routes = [
  {
    path : ' ',
    component : HomeComponent
  },
  {
    path : 'course',
    component : CourseComponent
  },
  {
    path : 'assignments',
    component : AssignmentsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
