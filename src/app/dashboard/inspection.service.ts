import { Injectable } from '@angular/core';
import { collection, getFirestore, doc, query, setDoc, getDocs } from "@angular/fire/firestore";
import { InterceptorService } from '../interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  private db = getFirestore()
  private inspectionRef = collection(this.db, "inspections");
  private _query = query(collection(this.db, "inspections"));
  constructor(private loaderService: InterceptorService) { }
  getInspections() {

    this.loaderService.showLoader();
    getDocs(this._query)
    .then(data => {
      let result :any[] = [];
      this.loaderService.hideLoader();
      if(data.docs.length > 0) result = data.docs.map(doc => doc.data())
      console.log(result);
    }).catch(
      error => {
        console.log(error);
        this.loaderService.hideLoader();
      }
    )
  }

  addInspection(inspection: Inspection) {
    this.loaderService.showLoader();
    return setDoc(doc(this.inspectionRef), inspection)
      .then(
        data => {
          this.loaderService.hideLoader();
        }
      )
      .catch(
        error => {
          console.log(error);
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