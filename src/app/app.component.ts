import { Component } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training';

  items = [
    { title: 'Item 1', image: 'https://via.placeholder.com/600x400' },
    { title: 'Item 2', image: 'https://via.placeholder.com/600x400/d91c4e/c22b2b' },
    { title: 'Item 3', image: 'https://via.placeholder.com/600x400/4ed91c/60c22b' },
  ];

  
  imagelist = [
    'luke.png',
    'chubaka.png',
    'boba.png',
    'c3po.png',
    'leia.png',
    'obi.png',
    'r2d2.png',
    'storm.png',
    'varder.png',
    'yoda.png',
    'yolo.png'
  ];

}

  
  