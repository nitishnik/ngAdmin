import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureCropperComponent } from './picture-cropper.component';

describe('PictureCropperComponent', () => {
  let component: PictureCropperComponent;
  let fixture: ComponentFixture<PictureCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
