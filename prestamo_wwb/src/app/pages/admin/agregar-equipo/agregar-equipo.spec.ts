import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEquipo } from './agregar-equipo';

describe('AgregarEquipo', () => {
  let component: AgregarEquipo;
  let fixture: ComponentFixture<AgregarEquipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEquipo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEquipo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
