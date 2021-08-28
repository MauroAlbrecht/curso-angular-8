import {Component, OnInit} from '@angular/core';
import {Course} from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  // inicia vazio
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '/assets/images/forms.png',
        price: 20.30,
        code: '102',
        duration: 8,
        rating: 4,
        relaseDate: 'November, 2, 2021'
      },
      {
        id: 2,
        name: 'Thymeleaf',
        imageUrl: '/assets/images/thymeleaf.png',
        price: 20.30,
        code: 'J8a8sj',
        duration: 4,
        rating: 4.5,
        relaseDate: 'November, 4, 2021'
      }
    ];
  }
}
