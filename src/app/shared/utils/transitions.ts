import { animate, keyframes, style, transition, trigger } from "@angular/animations";

const leftUp = (height = 175) => trigger("leftUp" + height, [
  transition(':enter', [
    style({ opacity: 0, height: 0, overflow: "hidden" }),
    animate(1000, style({ opacity: .8, height: height + "px" })),
  ])
]);

export const fadeOut = trigger("fadeOut", [
  transition(':leave', [
    style({ opacity: 1}),
    animate(400, style({ opacity: 0})),
  ]),
  transition(':enter', [
    style({ opacity: 0}),
    animate(800, style({ opacity: 1})),
  ])
]);

export const rise = trigger('rise',[

  transition(':enter',[
    style({opacity:0.1, filter:'none' ,rotate:"-30deg"}), animate(1600,keyframes([
      style({opacity:.4, offset:0.3, rotate:"-20deg"}),
      style({opacity:.8, offset:0.5, rotate:"-10deg" }),
      style({opacity:.8, offset:0.7, rotate:"10deg" }),
      style({opacity:.8, offset:0.85, rotate:"-10deg" }),
      style({opacity:1, offset:1, rotate:"0deg" }),
    ])),
  ])
]);

export const easeRight = trigger('easeRight' ,[

  transition(':enter',[
    style({opacity:0.1, translate: "-30%" , filter:'none'}), animate(1200,keyframes([
      style({opacity:.4, translate: "-20%", offset:0.33}),
      style({opacity:.8, translate: "-10%", offset:0.66 }),
      style({opacity:1, translate: "0%", filter:"blur(1px)", offset:1 }),
    ])),
  ])
])


export const leftUp270 = leftUp(270);
export const leftUp380 = leftUp(380);