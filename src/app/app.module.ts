import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './layouts/headers/headers.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FootersComponent } from './layouts/footers/footers.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglPostsComponent } from './pages/singl-posts/singl-posts.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import { environment } from 'src/environments/environment.prod';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { ScrollComponentComponent } from './scroll-component/scroll-component.component';
import { TermComponent } from './term/term.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    CategoryNavbarComponent,
    FootersComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglPostsComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutUsComponent,
    PostCardComponent,
    DarkModeComponent,
    ScrollComponentComponent,
    TermComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
