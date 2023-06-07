import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  
  categoryArrays:any[] = [];
  isCollapsed = false;
  constructor(private categoryService:CategoriesService) { }
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }  
  ngOnInit(): void{
    this.categoryService.loadDatas().subscribe(val=> {
      //console.log(val);
      this.categoryArrays=val;
    });
  }
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode', this.isDarkMode);
  }

}
