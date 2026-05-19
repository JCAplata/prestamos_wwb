import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Retrasos } from './retrasos';

describe('Retrasos', () => {
  let component: Retrasos;
  let fixture: ComponentFixture<Retrasos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Retrasos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Retrasos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
