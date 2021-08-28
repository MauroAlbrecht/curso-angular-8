import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CourseListComponent} from './courses/course-list.component';
import {StarComponent} from './star/star.component';
import {ReplacePipe} from './pipe/replace.pipe';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import {Error404Compoennt} from './error-404/error-404.component';
import {CourseInfoComponent} from './courses/course-info.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Compoennt,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }, {
        path: '**', component: Error404Compoennt
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
