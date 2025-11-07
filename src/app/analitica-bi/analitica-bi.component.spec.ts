import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliticaBIComponent } from './analitica-bi.component';

describe('AnaliticaBIComponent', () => {
  let component: AnaliticaBIComponent;
  let fixture: ComponentFixture<AnaliticaBIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliticaBIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliticaBIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
