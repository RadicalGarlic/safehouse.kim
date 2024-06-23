import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingTopicsComponent } from './writing-topics.component';

describe('WritingTopicsComponent', () => {
  let component: WritingTopicsComponent;
  let fixture: ComponentFixture<WritingTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
