import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksListPageComponent } from './tracks-list-page.component';

describe('TracksListPageComponent', () => {
  let component: TracksListPageComponent;
  let fixture: ComponentFixture<TracksListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
