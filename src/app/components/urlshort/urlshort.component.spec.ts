import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlshortComponent } from './urlshort.component';

describe('UrlshortComponent', () => {
  let component: UrlshortComponent;
  let fixture: ComponentFixture<UrlshortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlshortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlshortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
