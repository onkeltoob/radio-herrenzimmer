import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixComponent } from './mix.component';

describe('MixComponent', () => {
  let component: MixComponent;
  let fixture: ComponentFixture<MixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
