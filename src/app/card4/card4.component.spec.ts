import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card4Component } from './card4.component';

describe('Card4Component', () => {
  let component: Card4Component;
  let fixture: ComponentFixture<Card4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card4Component]
    });
    fixture = TestBed.createComponent(Card4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
