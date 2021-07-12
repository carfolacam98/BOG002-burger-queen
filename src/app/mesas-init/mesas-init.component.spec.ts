import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasInitComponent } from './mesas-init.component';

describe('MesasInitComponent', () => {
  let component: MesasInitComponent;
  let fixture: ComponentFixture<MesasInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesasInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesasInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
