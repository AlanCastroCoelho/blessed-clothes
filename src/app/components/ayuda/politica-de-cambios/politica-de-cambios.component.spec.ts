import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDeCambiosComponent } from './politica-de-cambios.component';

describe('PoliticaDeCambiosComponent', () => {
  let component: PoliticaDeCambiosComponent;
  let fixture: ComponentFixture<PoliticaDeCambiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaDeCambiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaDeCambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
