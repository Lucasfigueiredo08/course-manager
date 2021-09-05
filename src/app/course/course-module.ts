import { StarComponent } from './../star/star.component';
import { ReplacePipe } from './../pipe/replace.pipe';
import { FormsModule } from '@angular/Forms';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ]
})

export class CourseModule {

}
