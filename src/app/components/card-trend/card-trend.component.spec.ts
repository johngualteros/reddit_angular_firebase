import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrendComponent } from './card-trend.component';

describe('CardTrendComponent', () => {
  let component: CardTrendComponent;
  let fixture: ComponentFixture<CardTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTrendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
