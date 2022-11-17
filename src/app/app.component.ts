import { Component } from '@angular/core';
import { ViewImageListenServiceService } from 'src/servicios/Listens/view-image-listen-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba_bolsiyo';

  constructor(
    private ViewImageListen:ViewImageListenServiceService
  ) { 
    this.ViewImageListen.initListenPreviewImage();
  }
}
