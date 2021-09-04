import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecardsComponent } from './pricecards.component';

describe('PricecardsComponent', () => {
  let component: PricecardsComponent;
  let fixture: ComponentFixture<PricecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricecardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
