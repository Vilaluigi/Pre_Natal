import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogPreNatal } from './dialog-pre-natal';

describe('DialogPreNatal', () => {
  let component: DialogPreNatal;
  let fixture: ComponentFixture<DialogPreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogPreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
