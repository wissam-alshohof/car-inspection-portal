import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  count = 0
  applyBlur$ = new BehaviorSubject(false)

  constructor() { }

}
