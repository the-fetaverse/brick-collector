import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickAddFormComponent } from './brick-add-form.component';

describe('BrickAddFormComponent', () => {
  let component: BrickAddFormComponent;
  let fixture: ComponentFixture<BrickAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrickAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrickAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
