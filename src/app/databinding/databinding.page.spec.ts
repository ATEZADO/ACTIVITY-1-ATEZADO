import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabindingPage } from './databinding.page';

describe('DatabindingPage', () => {
  let component: DatabindingPage;
  let fixture: ComponentFixture<DatabindingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatabindingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
