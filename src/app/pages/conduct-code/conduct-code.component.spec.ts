import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductCodeComponent } from './conduct-code.component';

describe('ConductCodeComponent', () => {
  let component: ConductCodeComponent;
  let fixture: ComponentFixture<ConductCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
