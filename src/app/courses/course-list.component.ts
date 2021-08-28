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
        name: 'JAVA',
        imageUrl: '',
        price: 20.30,
        code: '102',
        duration: 8,
        rating: 2,
        relaseDate: 'November, 2, 2021'
      },
      {
        id: 2,
        name: 'Thymeleaf',
        imageUrl: '',
        price: 20.30,
        code: 'J8a8sj',
        duration: 4,
        rating: 23,
        relaseDate: 'November, 4, 2021'
      }
    ];
  }
}
