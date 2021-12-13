import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserPageComponent } from './home-user-page.component';

describe('HomeUserPageComponent', () => {
  let component: HomeUserPageComponent;
  let fixture: ComponentFixture<HomeUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
