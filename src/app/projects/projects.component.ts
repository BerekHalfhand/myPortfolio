import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule]
})
export class ProjectsComponent {
  projects = [
    { title: 'Project 1', description: 'A scalable web app' },
    { title: 'Project 2', description: 'An e-commerce platform' },
  ];
}
