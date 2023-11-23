import { animate, style, transition, trigger } from "@angular/animations";

const leftUp = (height =175) => trigger("leftUp"+height, [
    transition(':enter', [
      style({opacity:0, height:0, overflow:"hidden"}),
      animate(800, style({opacity:.8, height:height+"px"})),
    ])
  ]);


  export const leftUp190 = leftUp(190);
  export const leftUp300 = leftUp(300);