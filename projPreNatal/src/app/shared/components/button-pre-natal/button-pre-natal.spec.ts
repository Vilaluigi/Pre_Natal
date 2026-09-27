import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonPreNatal } from './button-pre-natal';

describe('ButtonPreNatal', () => {
  let component: ButtonPreNatal;
  let fixture: ComponentFixture<ButtonPreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonPreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
