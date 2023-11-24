import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  /**
   * This service imitate interceptor behavior since Firestore 
   * doesn't use HTTPClient but socket instead 
   * besides that using to manage state of loading and showing errors 
   */
  constructor() { }

  private _loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this._loadingSubject.asObservable();

  showLoader() {
    this._loadingSubject.next(true);
  }

  hideLoader() {
    this._loadingSubject.next(false);
  }
  
}
