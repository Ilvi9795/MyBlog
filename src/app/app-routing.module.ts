import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SinglPostsComponent } from './pages/singl-posts/singl-posts.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'dark',component:DarkModeComponent},
  {path:'category/:category/:id',component:SingleCategoryComponent},
  {path:'post/:id',component:SinglPostsComponent},
  {path:'terms',component:TermsAndConditionsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'posts/:id',component:PostCardComponent},
  {path:'category',component:CategoryNavbarComponent},
  {path:'contactUs',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
