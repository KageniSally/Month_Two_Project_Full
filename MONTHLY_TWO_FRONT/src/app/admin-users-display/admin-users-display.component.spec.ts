import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersDisplayComponent } from './admin-users-display.component';

describe('AdminUsersDisplayComponent', () => {
  let component: AdminUsersDisplayComponent;
  let fixture: ComponentFixture<AdminUsersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUsersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
