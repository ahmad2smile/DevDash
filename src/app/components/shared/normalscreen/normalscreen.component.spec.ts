import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalscreenComponent } from './normalscreen.component';

describe('NormalscreenComponent', () => {
  let component: NormalscreenComponent;
  let fixture: ComponentFixture<NormalscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
