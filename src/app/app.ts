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
}
