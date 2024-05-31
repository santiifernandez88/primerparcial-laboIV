import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorraHeladoComponent } from './borra-helado.component';

describe('BorraHeladoComponent', () => {
  let component: BorraHeladoComponent;
  let fixture: ComponentFixture<BorraHeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorraHeladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorraHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
