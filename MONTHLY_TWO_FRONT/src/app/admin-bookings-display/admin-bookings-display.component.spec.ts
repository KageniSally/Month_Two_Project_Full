import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookingsDisplayComponent } from './admin-bookings-display.component';

describe('AdminBookingsDisplayComponent', () => {
  let component: AdminBookingsDisplayComponent;
  let fixture: ComponentFixture<AdminBookingsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBookingsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBookingsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
