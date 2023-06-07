import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglPostsComponent } from './singl-posts.component';

describe('SinglPostsComponent', () => {
  let component: SinglPostsComponent;
  let fixture: ComponentFixture<SinglPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
