import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  courses = [
    {id : 1,
      name: "אפיה",
      NumberOfSessions : "5",
      LecturerName : "מרים כהן"
    },
    {id : 2,
      name: "תסרוקות",
      NumberOfSessions : "75",
      LecturerName : "תהילה לוי"
    },{id : 3,
      name: "בישול",
      NumberOfSessions : "4",
      LecturerName : "שרה כהן"
    },{id : 4,
      name: "איפור",
      NumberOfSessions : "52",
      LecturerName : "מרים כהן"
    },
  ]
    course: any;
constructor(public route:ActivatedRoute)
{

}

ngOnInit()
{
  const id =Number(this.route.snapshot.paramMap.get('id'))

  this.course = this.courses.find(c => c.id ==id)
}
}
