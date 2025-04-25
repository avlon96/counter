import { Component } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CounterComponent],
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
