import { Component, OnInit } from '@angular/core';
import { image } from 'src/interfaces/image.interface';
import { QueriesServiceService } from 'src/servicios/queries/queries-service.service';
import { Store } from '@ngrx/store'
import { loadedImages, loadImages, previewImages } from 'src/app/state/actions/images.actions';
import { Observable } from 'rxjs';
import { selectListImages } from 'src/app/state/selectors/items.selectors';
import { ViewImageListenServiceService } from 'src/servicios/Listens/view-image-listen-service.service';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  search_bar:string = '';
  dark:boolean = false;
  tags:any[] = []
  
  images$: Observable<any> = new Observable();
  OutputimageData:any = {};

  constructor(
    private Queries:QueriesServiceService,
    private store:Store<any>,
    public ViewImageListen:ViewImageListenServiceService
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
      e.classList.remove('active_dark')
    })
    if (!this.dark) {
      categories[index].classList.add('active')
    }else{
      categories[index].classList.add('active_dark')  
    }
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
    const categories = document.querySelectorAll('#categories a');
    categories.forEach((category:any) => {
      if (category.classList[0] == 'active') {
        if (!this.dark) {
          category.classList.remove('active')
          category.classList.add('active_dark')
        }
      }else if(category.classList[0] == 'active_dark'){
        if (this.dark) {
          category.classList.remove('active_dark')
          category.classList.add('active')
        }
      }
    })
    const body = document.querySelector('#body_app')
    const searchInput = document.querySelector('#search-bar')
    const title = document.querySelector('#title')
    const header = document.querySelector('#header')
    if (!this.dark) {
      body?.classList.add('dark')
      searchInput?.classList.add('dark_searchInput')
      title?.classList.add('dark_text')
      header?.classList.add('dark')
    }else{
      body?.classList.remove('dark')
      searchInput?.classList.remove('dark_searchInput')
      title?.classList.remove('dark_text')
      header?.classList.remove('dark')
    }
  
  }

  preview(img:image){
    if (img.tags.split(',')?.length > 0) {
      this.tags = img.tags.split(',')
    }else{
      this.tags = [];
    }
    this.OutputimageData = { image:img , tags:this.tags };
    this.store.dispatch(previewImages(
      { imagePreview: true}
    ))
 
  }
}
