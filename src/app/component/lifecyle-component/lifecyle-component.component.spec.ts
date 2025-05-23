import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleComponentComponent } from './lifecyle-component.component';

describe('LifecyleComponentComponent', () => {
  let component: LifecyleComponentComponent;
  let fixture: ComponentFixture<LifecyleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyleComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
