import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ReferencesComponent {
  references = [
    {
      email: 'ion@rightwayhealthcare.com',
      name: 'Ion Feldman',
      position: 'CTO at Rightway Healthcare',
      linkedin: 'https://www.linkedin.com/in/ionfeldman/',
    },
    {
      email: 'brian@briandavidjoyner.com',
      name: 'Brian Joyner',
      position: 'CPO at OpenMedicare',
      linkedin: 'https://www.linkedin.com/in/briandavidjoyner/',
    },
    {
      email: 'rishikkochhar@gmail.com',
      name: 'Rishi Kochhar',
      position: 'Lead PM at Rightway Healthcare',
      linkedin: 'https://www.linkedin.com/in/rishikochhar/',
    },
  ];
}
