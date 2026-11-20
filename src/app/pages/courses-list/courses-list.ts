import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-courses-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList {
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




}
