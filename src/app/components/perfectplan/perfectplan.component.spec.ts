import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectplanComponent } from './perfectplan.component';

describe('PerfectplanComponent', () => {
  let component: PerfectplanComponent;
  let fixture: ComponentFixture<PerfectplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfectplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
