import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorhomeComponent } from './repartidorhome.component';

describe('RepartidorhomeComponent', () => {
  let component: RepartidorhomeComponent;
  let fixture: ComponentFixture<RepartidorhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepartidorhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepartidorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
