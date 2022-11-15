import { Component, OnInit } from '@angular/core';
import { QueriesServiceService } from 'src/servicios/queries/queries-service.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  images:any[] = [];
  search_bar:string = '';
  dark:boolean = false;
  _preview:any = null
  
  constructor(
    private Queries:QueriesServiceService
  ) { }


  async ngOnInit() {  
    this.queryImage()
  }

  async queryCategories(categorie:string,index:number){
    const categories = document.querySelectorAll('#categories a');
    categories.forEach((e:any) => {
      e.classList.remove('active')
    })
    categories[index].classList.add('active')    
    let res:any = await this.Queries.consultCategories(categorie)
    console.log(res);
    if (res?.hits?.length > 0) {
      this.images = res.hits
    }
  }

  async queryImage(){
    let res:any = await this.Queries.consultImage(this.search_bar);
    console.log(res);
    if (res?.hits?.length > 0) {
      this.images = res.hits
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

  preview(img:any){
    if (img.tags.split(',')?.length > 0) {
      img.tagsArray = img.tags.split(',')
    }else{
      img.tagsArray = [];
    }
    this._preview = img 
  }

  previewClose(){
    this._preview = null;
  }

  

}
