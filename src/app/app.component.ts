import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-blog-app';
  
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.showScrollToTop = window.pageYOffset > 500;
  }

  showScrollToTop: boolean = false;


  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }
}
