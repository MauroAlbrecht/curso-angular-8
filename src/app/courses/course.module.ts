import {NgModule} from '@angular/core';
import {CourseListComponent} from './course-list.component';
import {CourseInfoComponent} from './course-info.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ReplacePipe} from '../pipe/replace.pipe';
import {StarModule} from '../shared/component/star/star.module';

/*import {StarModule} from '../shared/component/star/star.module';
import {AppPipeModule} from '../shared/pipe/app-pipe.module';*/

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    StarModule,
    /*  StarModule,
      AppPipeModule,*/
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule {

}
