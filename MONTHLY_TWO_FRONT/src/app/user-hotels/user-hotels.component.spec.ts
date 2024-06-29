import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHotelsComponent } from './user-hotels.component';

describe('UserHotelsComponent', () => {
  let component: UserHotelsComponent;
  let fixture: ComponentFixture<UserHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHotelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
