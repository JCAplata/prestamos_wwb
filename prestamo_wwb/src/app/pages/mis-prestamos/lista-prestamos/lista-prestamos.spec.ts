import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrestamos } from './lista-prestamos';

describe('ListaPrestamos', () => {
  let component: ListaPrestamos;
  let fixture: ComponentFixture<ListaPrestamos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPrestamos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPrestamos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
