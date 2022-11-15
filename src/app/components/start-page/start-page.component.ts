import { Component, OnInit } from '@angular/core';
import { image } from 'src/interfaces/image.interface';
import { QueriesServiceService } from 'src/servicios/queries/queries-service.service';
import { Store } from '@ngrx/store'
import { loadedImages, loadImages, previewImages } from 'src/app/state/actions/images.actions';
import { Observable } from 'rxjs';
import { selectListImages } from 'src/app/state/selectors/items.selectors';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  search_bar:string = '';
  dark:boolean = false;
  _preview:any = null;
  tags:any[] = []
  
  images$: Observable<any> = new Observable();

  constructor(
    private Queries:QueriesServiceService,
    private store:Store<any>
  ) { }


  async ngOnInit() {
    this.store.dispatch(loadImages())
    this.queryImage();
    this.images$ = this.store.select(selectListImages)
  }

  async queryCategories(categorie:string,index:number){
    const categories = document.querySelectorAll('#categories a');
    categories.forEach((e:any) => {
      e.classList.remove('active')
    })
    categories[index].classList.add('active')
    try {
      let res:any = await this.Queries.consultCategories(categorie)
      console.log(res);
      if (res?.hits?.length > 0) {
        this.store.dispatch(loadedImages(
          { images: res.hits }
        ))
      }
    } catch (error) {
      console.log(error);
    }    
  }

  async queryImage(){
    try {
      let res:any = await this.Queries.consultImage(this.search_bar);
      if (res?.hits?.length > 0) {
        this.store.dispatch(loadedImages(
          { images: res.hits }
        ))
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  mode(){
    const body = document.querySelector('#body_app')
    const searchInput = document.querySelector('#search-bar')
    const title = document.querySelector('#title')
    if (!this.dark) {
      body?.classList.add('dark')
      searchInput?.classList.add('dark_searchInput')
      title?.classList.add('dark_text')
    }else{
      body?.classList.remove('dark')
      searchInput?.classList.remove('dark_searchInput')
      title?.classList.remove('dark_text')
    }
  
  }

  preview(img:image){
    if (img.tags.split(',')?.length > 0) {
      this.tags = img.tags.split(',')
    }else{
      this.tags = [];
    }

    this.store.dispatch(previewImages(
      { imagePreview: [ img ] }
    ))
    this._preview = img 
  }

  previewClose(){
    this._preview = null;
  }

  

}
