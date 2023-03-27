import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderDashboardComponent } from './builder-dashboard.component';

describe('BuilderDashboardComponent', () => {
  let component: BuilderDashboardComponent;
  let fixture: ComponentFixture<BuilderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
