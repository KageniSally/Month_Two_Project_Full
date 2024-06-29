import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHotelsDisplayComponent } from './admin-hotels-display.component';

describe('AdminHotelsDisplayComponent', () => {
  let component: AdminHotelsDisplayComponent;
  let fixture: ComponentFixture<AdminHotelsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHotelsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminHotelsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
