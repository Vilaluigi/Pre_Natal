import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainLayoutPreNatal } from './main-layout-pre-natal';

describe('MainLayoutPreNatal', () => {
  let component: MainLayoutPreNatal;
  let fixture: ComponentFixture<MainLayoutPreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutPreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainLayoutPreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
