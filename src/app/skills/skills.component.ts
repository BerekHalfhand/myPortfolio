import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent {
  hardSkills = [
    'JavaScript',
    'AI',
    'React',
    'Git',
    'CSS',
    'Linux',
    'Redux',
    'Angular',
    'AWS',
    'React Native',
    'Node.js',
    'PHP',
    'MongoDB',
    'MySQL',
    'SEO',
    'Cybersecurity',
    'TypeScript',
    'Cloud Computing',
    'Docker',
    'C#',
    'Next.js',
    'Express',
    'Test Automation',
    'Ruby',
    'C++',
    'jQuery'
  ];

  softSkills = [
    'Communication',
    'Attention to Detail',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
    'Active Listening',
    'Leadership',
    'Project Management',
    'Team Building',
    'Mentorship and Coaching',
    'Marketing',
    'Delegation'
  ];
}
