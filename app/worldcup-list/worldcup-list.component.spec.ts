import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldcupListComponent } from './worldcup-list.component';

describe('WorldcupListComponent', () => {
  let component: WorldcupListComponent;
  let fixture: ComponentFixture<WorldcupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldcupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldcupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
