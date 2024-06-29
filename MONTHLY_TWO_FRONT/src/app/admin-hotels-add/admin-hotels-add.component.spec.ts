import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHotelsAddComponent } from './admin-hotels-add.component';

describe('AdminHotelsAddComponent', () => {
  let component: AdminHotelsAddComponent;
  let fixture: ComponentFixture<AdminHotelsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHotelsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminHotelsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
