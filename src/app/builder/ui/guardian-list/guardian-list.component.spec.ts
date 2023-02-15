import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianListComponent } from './guardian-list.component';

describe('GuardianListComponent', () => {
  let component: GuardianListComponent;
  let fixture: ComponentFixture<GuardianListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
