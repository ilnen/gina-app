import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotarObjetivoComponent } from './votar-objetivo.component';

describe('VotarObjetivoComponent', () => {
  let component: VotarObjetivoComponent;
  let fixture: ComponentFixture<VotarObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotarObjetivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotarObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
