import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickEditListComponent } from './brick-edit-list.component';

describe('BrickEditListComponent', () => {
  let component: BrickEditListComponent;
  let fixture: ComponentFixture<BrickEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrickEditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrickEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
