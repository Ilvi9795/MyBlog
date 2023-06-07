import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
//    const isDarkModeOn = localStorage.getItem('isDarkModeOn');

 
  }isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
