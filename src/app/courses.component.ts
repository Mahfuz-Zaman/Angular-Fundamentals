import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ 'Title: ' + title | uppercase }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img src="{{ imgUrl }}" alt="" /> <br />
    <!-- //class binding -->
    <button class="btn btn-primary mt-3" [class.active]="isActive">Save</button
    ><br />
    <!-- //style binding -->
    <button class="mt-3" [style.backgroundColor]="isbActive ? 'blue' : 'red'">
      Sign In
    </button>
    <br />
    <!-- //event binding -->
    <!-- <button class="btn btn-success mt-3" (click)="onSave()">Click Me</button>
    <br /> -->
    <!-- //Event filtering -->
    <!-- <input class="mt-3" type="text" #email (keyup.enter)="onKeyUp($event)" /> -->
    <!-- //Template variables filtering -->
    <!-- <input
      class="mt-3"
      type="text"
      #email
      (keyup.enter)="oneKeyUp(email.value)" 
    />-->

    <!-- //Two way Binding  -->
    <input
      class="mt-3"
      type="text"
      [(ngModel)]="email"
      (keyup.enter)="onKeyUp()"
    />
  `,
})
export class CoursesComponent {
  title = 'List Of Courses';
  imgUrl = 'https://picsum.photos/400/300?random=1';
  courses;
  isActive = true;
  isbActive = false;
  // onSave() {
  //   console.log('button was clicked');
  // }
  // onKeyUp($event: any) {
  //   console.log($event.target.value);
  // }
  // oneKeyUp(email: any) {
  //   console.log(email);
  // }

  email = 'me@example.com';
  onKeyUp() {
    console.log(this.email);
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
