import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsvgComponent } from './textsvg.component';

describe('TextsvgComponent', () => {
  let component: TextsvgComponent;
  let fixture: ComponentFixture<TextsvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextsvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
