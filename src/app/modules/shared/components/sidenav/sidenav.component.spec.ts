import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';

describe('SidenavarComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent]
    });
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
