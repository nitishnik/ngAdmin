import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureCropperComponent } from './view/picture-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [PictureCropperComponent],
  imports: [
    CommonModule,
    ImageCropperModule
  ],
  exports:[PictureCropperComponent],
  entryComponents:[PictureCropperComponent]

})
export class PictureCropperModule { }
