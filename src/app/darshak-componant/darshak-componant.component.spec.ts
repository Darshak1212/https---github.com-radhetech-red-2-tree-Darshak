import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshakComponantComponent } from './darshak-componant.component';

describe('DarshakComponantComponent', () => {
  let component: DarshakComponantComponent;
  let fixture: ComponentFixture<DarshakComponantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarshakComponantComponent]
    });
    fixture = TestBed.createComponent(DarshakComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
