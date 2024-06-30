import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tekken7Component } from './tekken-7.component';

describe('Tekken7Component', () => {
  let component: Tekken7Component;
  let fixture: ComponentFixture<Tekken7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tekken7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tekken7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
