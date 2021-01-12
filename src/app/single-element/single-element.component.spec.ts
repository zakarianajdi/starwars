import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleElementComponent } from './single-element.component';

describe('SingleElementComponent', () => {
  let component: SingleElementComponent;
  let fixture: ComponentFixture<SingleElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
