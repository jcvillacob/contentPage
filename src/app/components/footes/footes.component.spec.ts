import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootesComponent } from './footes.component';

describe('FootesComponent', () => {
  let component: FootesComponent;
  let fixture: ComponentFixture<FootesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
