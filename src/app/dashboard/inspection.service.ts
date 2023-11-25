import { Injectable } from '@angular/core';
import { collection, getFirestore, doc, query, setDoc, getDocs, DocumentData } from "@angular/fire/firestore";
import { InterceptorService } from '../interceptor.service';
import { ToastService } from '../shared/toast.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  private db = getFirestore()
  private inspectionRef = collection(this.db, "inspections");
  private _query = query(collection(this.db, "inspections"));

  _inspections$ = new BehaviorSubject<DocumentData[]>([]);

  get inspections$() {
    return this._inspections$.asObservable();
  };
  constructor(private loaderService: InterceptorService, private toast: ToastService) { }
  getInspections() {

    this.loaderService.showLoader();
    return getDocs(this._query)
      .then(data => {
  
        this.loaderService.hideLoader();
        if (data.docs.length > 0) this._inspections$.next(data.docs.map(doc => doc.data()))
      }).catch(
        error => {
          this.toast.showError(error.msg);
          this.loaderService.hideLoader();
        }
      )
  }

  addInspection(inspection: Inspection) {
    this.loaderService.showLoader();
    return setDoc(doc(this.inspectionRef), inspection)
      .then(
        data => {
          this.toast.showSuccess("New Inspection Added");
          this.loaderService.hideLoader();
        }
      )
      .catch(
        error => {
          this.toast.showError(error.msg);
          this.loaderService.hideLoader();
        }
      )
  }
}


interface Inspection {
  make: string;
  model: string;
  year: number;
  date: Date;
  comments?: string;
}