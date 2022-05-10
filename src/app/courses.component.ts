import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ 'Title: ' + title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img src="{{ imgUrl }}" alt="" />
  `,
})
export class CoursesComponent {
  title = 'List Of Courses';
  imgUrl = 'https://picsum.photos/400/200?random=1';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
