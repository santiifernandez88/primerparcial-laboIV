import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaHeladoComponent } from './crea-helado.component';

describe('CreaHeladoComponent', () => {
  let component: CreaHeladoComponent;
  let fixture: ComponentFixture<CreaHeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaHeladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreaHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
