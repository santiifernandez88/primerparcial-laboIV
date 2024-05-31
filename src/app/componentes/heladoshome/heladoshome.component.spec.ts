import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoshomeComponent } from './heladoshome.component';

describe('HeladoshomeComponent', () => {
  let component: HeladoshomeComponent;
  let fixture: ComponentFixture<HeladoshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeladoshomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeladoshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
