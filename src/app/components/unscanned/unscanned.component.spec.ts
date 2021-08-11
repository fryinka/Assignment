import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscannedComponent } from './unscanned.component';

describe('UnscannedComponent', () => {
  let component: UnscannedComponent;
  let fixture: ComponentFixture<UnscannedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnscannedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnscannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
