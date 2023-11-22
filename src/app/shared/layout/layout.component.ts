import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('fadeOut',[

      transition(':enter',[
        style({opacity:0.1, filter:'none'}), animate(1200,keyframes([
          style({opacity:.4, offset:0.4}),
          style({opacity:.8, offset:0.8 }),
          style({opacity:1, filter:"blur(1px)", offset:1 }),
        ])),
      ])
    ])
  ]
})
export class LayoutComponent {

}
