import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {Error404Compoennt} from './error-404/error-404.component';
import {HttpClientModule} from '@angular/common/http';
import {CourseModule} from './courses/course.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Compoennt
  ],
  imports: [// aqui importa os módulos
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
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
