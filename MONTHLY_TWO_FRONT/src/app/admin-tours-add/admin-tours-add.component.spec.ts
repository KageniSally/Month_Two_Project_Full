import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToursAddComponent } from './admin-tours-add.component';

describe('AdminToursAddComponent', () => {
  let component: AdminToursAddComponent;
  let fixture: ComponentFixture<AdminToursAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminToursAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminToursAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
