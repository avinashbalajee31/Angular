import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHotelViewComponent } from './admin-hotel-view.component';

describe('AdminHotelViewComponent', () => {
  let component: AdminHotelViewComponent;
  let fixture: ComponentFixture<AdminHotelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHotelViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHotelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
