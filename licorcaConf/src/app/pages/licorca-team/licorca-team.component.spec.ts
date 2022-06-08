import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicorcaTeamComponent } from './licorca-team.component';

describe('LicorcaTeamComponent', () => {
  let component: LicorcaTeamComponent;
  let fixture: ComponentFixture<LicorcaTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicorcaTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicorcaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
