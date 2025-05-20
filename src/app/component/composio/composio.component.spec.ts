import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposioComponent } from './composio.component';

describe('ComposioComponent', () => {
  let component: ComposioComponent;
  let fixture: ComponentFixture<ComposioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
