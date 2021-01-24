import {Component, Inject, OnInit} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-image-cropper',
    templateUrl: './image-cropper.component.html',
    styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {
    imageChangedEvent: any = '';
    croppedImage: any = '';

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<ImageCropperComponent>) {
        this.imageChangedEvent = data.fileEvent;
    }

    ngOnInit() {
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
        // console.log(event);
    }

    imageCropped(event: ImageCroppedEvent) {
        // console.log(event);
        this.croppedImage = event.base64;
    }

    imageLoaded(event:any) {
        console.log(event, "imageLoaded");
        
        // show cropper
    }

    cropperReady(event:any) {
        console.log(event, "cropperReady");

        // cropper ready
    }

    loadImageFailed(event:any) {
        console.log(event, "loadImageFailed");

        // show message
    }

    onCrop() {
        this.dialog.close(this.croppedImage);
    }

    onCancel() {
        this.dialog.close(undefined);
    }

}
