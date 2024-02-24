import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontpageComponent } from './storefrontpage.component';

describe('StorefrontpageComponent', () => {
  let component: StorefrontpageComponent;
  let fixture: ComponentFixture<StorefrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StorefrontpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorefrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
