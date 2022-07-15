import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';

const routes: Routes = [
  {path:"viewcourse",component:ViewcourseComponent},
{path:"addcourse",component:AddCourseComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
