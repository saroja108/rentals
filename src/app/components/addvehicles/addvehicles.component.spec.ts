import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvehiclesComponent } from './addvehicles.component';

describe('AddvehiclesComponent', () => {
  let component: AddvehiclesComponent;
  let fixture: ComponentFixture<AddvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddvehiclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
