import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiComboExampleComponent } from './multi-combo-example.component';

describe('MultiComboExampleComponent', () => {
  let component: MultiComboExampleComponent;
  let fixture: ComponentFixture<MultiComboExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiComboExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiComboExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
