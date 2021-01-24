import {NgModule} from '@angular/core';
import {ImageCropperComponent} from './image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
@NgModule({
    declarations: [
        ImageCropperComponent
    ],
    imports: [
        ImageCropperModule
    ],
    exports: [
        ImageCropperComponent
    ],
    entryComponents: [ImageCropperComponent]
})
export class CustomImageCropperModule {
}
