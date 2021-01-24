import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PictureCropperComponent } from '../../picture-cropper/view/picture-cropper.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm:FormGroup;
  options:FormArray;
  constructor(private _fb:FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.dynamicForm = this._fb.group({
      name: [''],
      image:[''],
      options: this._fb.array([ this.createItem() ])
    })
  }

  onSubmit(){
    console.log(this.dynamicForm.value);
    console.log(this.dynamicForm);
    
  }

  createItem(): FormGroup {
    return this._fb.group({
      option: [''],
    });
  }

  addItem(): void {
    this.options = this.dynamicForm.get('options') as FormArray;
    this.options.push(this.createItem());
  }
  removeItem(index:number){
    this.options = this.dynamicForm.get('options') as FormArray;
    this.options.removeAt(index)    
  }

  fileSelectionEvent(fileInput:any){
    console.log(fileInput, "fileInputfileInputfileInput");
    
    // this.dialog.open(PictureCropperComponent, {
    //   width: '900px',
      // height: '500px',
      // disableClose: true,
      // data:{
      //   fileEvent: fileInput
      // }
  // })
  //   this.dialog.open(ImageCropperComponent, {
  //     width: '900px',
  //     // height: '500px',
  //     // disableClose: true,
  //     data:{
  //       fileEvent: fileInput
  //     }
  // })
  }
}
