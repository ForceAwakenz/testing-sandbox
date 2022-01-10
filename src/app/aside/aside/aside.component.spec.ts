import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondaryComponent } from '../secondary/secondary.component';

import { AsideComponent } from './aside.component';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideComponent, SecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
