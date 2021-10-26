import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscannedComponent } from './unscanned.component';
import {ShoeServiceService} from '../../services/shoe-service.service'

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

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers:[UnscannedComponent,{provide:ShoeServiceService}],

    })
  })
  it('should create', () => {
    expect(component).toContain('Unscanned');
  });

  it('')
});
