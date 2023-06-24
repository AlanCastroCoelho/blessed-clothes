import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoDePrendasComponent } from './cuidado-de-prendas.component';

describe('CuidadoDePrendasComponent', () => {
  let component: CuidadoDePrendasComponent;
  let fixture: ComponentFixture<CuidadoDePrendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuidadoDePrendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuidadoDePrendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
