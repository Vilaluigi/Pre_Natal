import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomePreNatal } from './welcome-pre-natal';

describe('WelcomePreNatal', () => {
  let component: WelcomePreNatal;
  let fixture: ComponentFixture<WelcomePreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WelcomePreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
