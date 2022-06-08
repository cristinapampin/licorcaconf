import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Call4papersComponent } from './call4papers.component';

describe('Call4papersComponent', () => {
  let component: Call4papersComponent;
  let fixture: ComponentFixture<Call4papersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Call4papersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Call4papersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
