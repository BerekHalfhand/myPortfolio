import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, MatCardModule]
})
export class AppComponent { }
