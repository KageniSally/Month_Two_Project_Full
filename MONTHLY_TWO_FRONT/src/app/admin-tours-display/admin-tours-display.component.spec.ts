import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToursDisplayComponent } from './admin-tours-display.component';

describe('AdminToursDisplayComponent', () => {
  let component: AdminToursDisplayComponent;
  let fixture: ComponentFixture<AdminToursDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminToursDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminToursDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
