import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentDropdownComponent } from './talent-dropdown.component';

describe('TalentDropdownComponent', () => {
  let component: TalentDropdownComponent;
  let fixture: ComponentFixture<TalentDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
