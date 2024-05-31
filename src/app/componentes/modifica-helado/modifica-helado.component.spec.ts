import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaHeladoComponent } from './modifica-helado.component';

describe('ModificaHeladoComponent', () => {
  let component: ModificaHeladoComponent;
  let fixture: ComponentFixture<ModificaHeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificaHeladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificaHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
