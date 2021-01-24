import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-picture-cropper',
  templateUrl: './picture-cropper.component.html',
  styleUrls: ['./picture-cropper.component.scss']
})
export class PictureCropperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageChangedEvent: any = '';
    croppedImage: any = '';
    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

}
