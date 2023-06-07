import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-component',
  templateUrl: './scroll-component.component.html',
  styleUrls: ['./scroll-component.component.css']
})
export class ScrollComponentComponent implements OnInit {


  ngOnInit() {
  }
  private contentEl: HTMLElement;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.contentEl = this.el.nativeElement.querySelector('.content');
  }
  scroll(direction: number) {
    this.contentEl.scrollBy({
      top: direction * 100,
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition);
  }
}
