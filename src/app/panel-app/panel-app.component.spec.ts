import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAppComponent } from './panel-app.component';

describe('PanelAppComponent', () => {
  let component: PanelAppComponent;
  let fixture: ComponentFixture<PanelAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
