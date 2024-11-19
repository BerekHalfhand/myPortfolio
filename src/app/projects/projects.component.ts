import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Cultura Liquida Website',
      date: 'Aug 2024 – Present',
      description: 'Online shop for medicinal mushroom products.',
      skills: ['Remote Work', 'Project Management', 'Next.js', 'DevOps'],
      link: 'https://cultura-liquida.com',
      contributors: ['Other contributors'],
    },
    {
      title: 'Advocate',
      date: 'Sep 2019 – Present',
      associatedWith: 'Rightway',
      description:
        'A rich tool for Rightway employees work organization and client communications. Built on a stack of ReactJS, GraphQL, and Webpack.',
      skills: [
        'Remote Work',
        'Model-View-Controller (MVC)',
        'Object-Oriented Programming (OOP)',
        'User Experience (UX)',
        'Continuous Integration and Continuous Delivery (CI/CD)',
        'Team Leadership',
        'User Interface Design',
        'TypeScript',
        'Documentation',
        'Agile Methodologies',
      ],
    },
    {
      title: 'Easy4 Mobile App',
      date: 'Mar 2019 – Aug 2019',
      associatedWith: 'Easy4 MVNO',
      description: 'Designed and deployed a mobile application for client account management.',
      skills: ['Remote Work', 'React Native'],
      link: 'https://github.com/BerekHalfhand/easy4_mobile_app',
    },
    {
      title: 'Tile.Expert Web Portal',
      date: 'Aug 2015 – Nov 2017',
      associatedWith: 'Tile.Expert',
      description:
        'Redesigned and optimized an internal web portal for over 300 employees, enhancing productivity. Migrated the portal to a modern tech stack with real-time notifications, task scheduling, and more.',
      skills: [
        'NodeJS',
        'MongoDB',
        'Angular2',
        'Symfony2 (PHP framework)',
        'jQuery',
        'Bootstrap',
        'Model-View-Controller (MVC)',
        'User Interface Design',
      ],
    },
    {
      title: 'Real-time Monitoring System on Gold Mines of Angara North',
      date: 'Sep 2013 – Dec 2013',
      associatedWith: 'Tomsk Polytechnic University',
      description:
        'Developed a real-time monitoring system for managing gold mines, winning multiple awards in international competitions.',
      skills: ['Angular', 'Remote Work', 'Model-View-Controller (MVC)', 'Object-Oriented Programming (OOP)'],
    },
  ];
}
