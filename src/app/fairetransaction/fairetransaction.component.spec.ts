import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairetransactionComponent } from './fairetransaction.component';

describe('FairetransactionComponent', () => {
  let component: FairetransactionComponent;
  let fixture: ComponentFixture<FairetransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairetransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairetransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
