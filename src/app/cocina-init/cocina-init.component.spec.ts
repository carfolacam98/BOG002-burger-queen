import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinaInitComponent } from './cocina-init.component';

describe('CocinaInitComponent', () => {
  let component: CocinaInitComponent;
  let fixture: ComponentFixture<CocinaInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocinaInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinaInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
