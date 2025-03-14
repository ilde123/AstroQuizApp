import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnivelComponent } from './subnivel.component';

describe('SubnivelComponent', () => {
  let component: SubnivelComponent;
  let fixture: ComponentFixture<SubnivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubnivelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
