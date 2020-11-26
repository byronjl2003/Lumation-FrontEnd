import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkeletoncardComponent } from './skeletoncard.component';

describe('SkeletoncardComponent', () => {
  let component: SkeletoncardComponent;
  let fixture: ComponentFixture<SkeletoncardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletoncardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletoncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
