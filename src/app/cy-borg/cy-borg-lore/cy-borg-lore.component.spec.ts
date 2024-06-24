import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyBorgLoreComponent } from './cy-borg-lore.component';

describe('CyBorgLoreComponent', () => {
  let component: CyBorgLoreComponent;
  let fixture: ComponentFixture<CyBorgLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyBorgLoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyBorgLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
