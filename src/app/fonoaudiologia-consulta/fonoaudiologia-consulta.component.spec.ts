import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonoaudiologiaConsultaComponent } from './fonoaudiologia-consulta.component';

describe('FonoaudiologiaConsultaComponent', () => {
  let component: FonoaudiologiaConsultaComponent;
  let fixture: ComponentFixture<FonoaudiologiaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonoaudiologiaConsultaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonoaudiologiaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
