import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPreviewImage } from 'src/app/state/selectors/items.selectors';

@Injectable({
  providedIn: 'root'
})
export class ViewImageListenServiceService {

  previewStatus$:Observable<boolean> = new Observable()
  public preview:boolean = false;
  
  constructor(
    private store:Store<any>
  ) { }

  initListenPreviewImage(){
    this.previewStatus$ = this.store.select(selectPreviewImage)
    this.previewStatus$.subscribe((_preview:boolean) => {
      this.preview = _preview
    })
  }
}
