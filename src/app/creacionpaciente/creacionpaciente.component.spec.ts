import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionpacienteComponent } from './creacionpaciente.component';

describe('CreacionpacienteComponent', () => {
  let component: CreacionpacienteComponent;
  let fixture: ComponentFixture<CreacionpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionpacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
