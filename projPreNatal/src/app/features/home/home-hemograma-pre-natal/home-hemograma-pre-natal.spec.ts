import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeHemogramaPreNatal } from './home-hemograma-pre-natal';

describe('HomeHemogramaPreNatal', () => {
  let component: HomeHemogramaPreNatal;
  let fixture: ComponentFixture<HomeHemogramaPreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHemogramaPreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeHemogramaPreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
