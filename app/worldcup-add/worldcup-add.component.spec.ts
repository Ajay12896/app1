import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldcupAddComponent } from './worldcup-add.component';

describe('WorldcupAddComponent', () => {
  let component: WorldcupAddComponent;
  let fixture: ComponentFixture<WorldcupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldcupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldcupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
