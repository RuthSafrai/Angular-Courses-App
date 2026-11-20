import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navbar } from './pages/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('courses');

  courses = [
    {id : "1",
      name: "אפיה",
      NumberOfSessions : "5",
      LecturerName : "מרים כהן"
    },
    {id : "2",
      name: "תסרוקות",
      NumberOfSessions : "75",
      LecturerName : "תהילה לוי"
    },{id : "3",
      name: "בישול",
      NumberOfSessions : "4",
      LecturerName : "שרה כהן"
    },{id : "4",
      name: "איפור",
      NumberOfSessions : "52",
      LecturerName : "מרים כהן"
    },
  ]
}
