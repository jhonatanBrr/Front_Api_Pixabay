import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostServiceService {

  key:string = '31325691-440ab3ad2ee483b9647f6ad29'
  url:string = `https://pixabay.com/api/?key=${this.key}`
  
  constructor() { }

}
