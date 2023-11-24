import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RGPage } from './rg.page';

describe('RGPage', () => {
  let component: RGPage;
  let fixture: ComponentFixture<RGPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
