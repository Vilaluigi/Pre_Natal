import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePreNatal } from './home-pre-natal';

describe('HomePreNatal', () => {
  let component: HomePreNatal;
  let fixture: ComponentFixture<HomePreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomePreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
