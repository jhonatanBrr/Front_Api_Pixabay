import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { previewImages } from 'src/app/state/actions/images.actions';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

  @Input() imageData:any = {};
  constructor(
    private store:Store<any>
  ) { }

  ngOnInit() {
    console.log(this.imageData);
  }

  previewClose(){
    this.store.dispatch(previewImages(
      { imagePreview: false}
    ))
  }

}
