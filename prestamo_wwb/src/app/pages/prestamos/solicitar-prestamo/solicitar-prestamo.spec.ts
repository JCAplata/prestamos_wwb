import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarPrestamo } from './solicitar-prestamo';

describe('SolicitarPrestamo', () => {
  let component: SolicitarPrestamo;
  let fixture: ComponentFixture<SolicitarPrestamo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarPrestamo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarPrestamo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
