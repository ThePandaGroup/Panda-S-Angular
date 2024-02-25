import { Component } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {

  items = [
    { imgSrc: './assets/airJordan1.png', title: 'Da Shoe', description: 'Let\'s say the shoe is a unique one' },
    // Add more items as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
