import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { previewImages } from 'src/app/state/actions/images.actions';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

  constructor(
    private store:Store<any>
  ) { }

  ngOnInit(): void {

  }

  previewClose(){
    this.store.dispatch(previewImages(
      { imagePreview: false}
    ))
  }

}
