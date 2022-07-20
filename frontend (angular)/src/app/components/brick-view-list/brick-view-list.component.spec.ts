import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickViewListComponent } from './brick-view-list.component';

describe('BrickViewListComponent', () => {
  let component: BrickViewListComponent;
  let fixture: ComponentFixture<BrickViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrickViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrickViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
