import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitformComponent } from './gitform.component';

describe('GitformComponent', () => {
  let component: GitformComponent;
  let fixture: ComponentFixture<GitformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
