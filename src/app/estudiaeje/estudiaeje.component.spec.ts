import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiaejeComponent } from './estudiaeje.component';

describe('EstudiaejeComponent', () => {
  let component: EstudiaejeComponent;
  let fixture: ComponentFixture<EstudiaejeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiaejeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiaejeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
