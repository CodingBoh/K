import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlanksPage } from './blanks.page';

describe('BlanksPage', () => {
  let component: BlanksPage;
  let fixture: ComponentFixture<BlanksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
