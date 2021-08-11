import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediapostsComponent } from './mediaposts.component';

describe('MediapostsComponent', () => {
  let component: MediapostsComponent;
  let fixture: ComponentFixture<MediapostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediapostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediapostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
