import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoepageComponent } from './shoepage.component';

describe('ShoepageComponent', () => {
  let component: ShoepageComponent;
  let fixture: ComponentFixture<ShoepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
