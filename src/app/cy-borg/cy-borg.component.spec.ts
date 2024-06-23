import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyBorgComponent } from './cy-borg.component';

describe('CyBorgComponent', () => {
  let component: CyBorgComponent;
  let fixture: ComponentFixture<CyBorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyBorgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyBorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
