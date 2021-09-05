import { PipeModule } from './../shared/pipe/app-pipe.module';
import { ReplacePipe } from './../shared/pipe/replace.pipe';
import { StarModule } from './../shared/component/star/star.module';
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
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    PipeModule,
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
