import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Tech Lead / Senior Web Developer',
      company: 'Rightway',
      location: 'New York, United States',
      duration: '2019-09 – present',
      description: [
        'Modernized and expanded the health navigation platform for Rightway Healthcare, a unicorn company, scaling it to serve over 2 million active users and preparing it for further scaling as the company targets doubling its membership by the end of 2024.',
        'Integrated ChatGPT to enable AI-powered features such as automated doctor profile completion and enhanced web search functionality.',
        'Spearheaded the refactoring of core functionalities using ReactJS, GraphQL, and Apollo, cutting load times 2x and reducing server load by ~30%.',
        'Directed a team of 6 developers, establishing best practices in front-end development and reducing technical debt by 80%.',
        'Oversaw team efforts in implementing comprehensive unit and E2E tests, resulting in improved software quality and early defect detection.'
      ],
      tags: ['ReactJS', 'GraphQL', 'Apollo']
    },
    {
      title: 'Mobile App Developer',
      company: 'Easy4 MVNO',
      location: 'Remote',
      duration: '2019-03 – 2019-09',
      description: [
        'Designed and deployed a mobile application for client account management with biometric login and web payments on Android and iOS platforms in just 3 weeks.',
        'The app went from 0 to 3400 users in a couple of months.',
        'Implemented eSIM feature allowing users to add multiple phone numbers for international travel or business needs.',
        'Added support chat and automated customer support to handle common inquiries like setup issues, account management, and troubleshooting.'
      ],
      tags: ['Mobile App Development', 'Android', 'iOS']
    },
    {
      title: 'Full Stack Developer',
      company: 'Tile.Expert',
      location: 'Remote',
      duration: '2015-07 – 2017-10',
      description: [
        'Redesigned and optimized an internal web portal for over 300 employees, enhancing productivity by 25% through improved performance and intuitive UI.',
        'Developed a customization & visualization tool for customers to preview tiles in different room settings, resulting in a 10% sales increase in Q2 2017.',
        'Built a real-time inventory tracking system to monitor stock levels, track shipments, and update availability, reducing the risk of overstocking or stockouts.'
      ],
      tags: ['Full Stack Development', 'Inventory Management']
    },
    {
      title: 'Full Stack Developer',
      company: 'Angara North',
      location: 'Remote',
      duration: '2012-01 – 2013-01',
      description: [
        'Developed a powerful observation and management system for gold mines, winning two awards in the InterSystems Student Programming competition, country-level and worldwide.',
        'Created a Python transmitter script for real-time sensor data relay to servers.',
        'Identified pump leakage, resulting in a 13% decrease in power costs.'
      ],
      tags: ['Python', 'Real-time Systems']
    },
    {
      title: 'Full Stack Developer',
      company: 'Research Institute of Analytical Monitoring and Modeling',
      location: 'On Site, Part-time',
      duration: '2011-01 – 2013-01',
      description: [
        'Built an online repository where visitors can access research papers, publications, data sets, and reports.',
        'Created interactive charts, graphs, and maps to showcase research findings and analytical models.',
        'Set up a CMS (Content Management System) to make it easier for the team to update content.'
      ],
      tags: ['Python', 'Real-time Systems']
    }
  ];
}
