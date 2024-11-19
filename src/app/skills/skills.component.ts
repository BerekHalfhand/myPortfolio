import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule, MatProgressBarModule]
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'React', level: 70 }
  ];
}
