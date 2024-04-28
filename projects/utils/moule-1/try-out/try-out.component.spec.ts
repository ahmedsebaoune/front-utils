import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryOutComponent } from './try-out.component';

describe('TryOutComponent', () => {
  let component: TryOutComponent;
  let fixture: ComponentFixture<TryOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TryOutComponent]
    });
    fixture = TestBed.createComponent(TryOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
