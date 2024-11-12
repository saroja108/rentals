import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvehiclesComponent } from './viewvehicles.component';

describe('ViewvehiclesComponent', () => {
  let component: ViewvehiclesComponent;
  let fixture: ComponentFixture<ViewvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewvehiclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
