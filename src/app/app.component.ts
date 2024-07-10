import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { Error } from './error/error.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, HeaderComponent, Error],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
