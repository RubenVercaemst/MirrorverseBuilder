import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGuardiansComponent } from './filter-guardians.component';

describe('FilterGuardiansComponent', () => {
  let component: FilterGuardiansComponent;
  let fixture: ComponentFixture<FilterGuardiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterGuardiansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterGuardiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
