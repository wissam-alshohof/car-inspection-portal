import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { InspectionService } from '../../inspection.service';
import { Subject, map } from 'rxjs';
import { ChartOptions, chartOptionsAdapter } from 'src/app/shared/utils/chart-options';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = "";

  chartOptions$ = new Subject<ChartOptions>();
  dataSource: DocumentData[] = [];
  displayedColumns = ["Make", "Model", "Year", "Inspection Date","Status", "Comments"];
  columns = ["make", "model", "year", "date", "status" ,"comments"]
  constructor(
    private authService: AuthService, 
    private inspectionService: InspectionService) {  }

  ngOnInit(): void {
    this.name = this.authService.userCredential.user.displayName;
    this.inspectionService.getInspections();
   this.inspectionService.inspections$.subscribe(
      data => {
  
        this.dataSource = data.map(d => ({
          ...d,
          status: new Date(d['date']).getTime() >= new Date().getTime() ? "Pending" : "Done"
        }));
        this.chartOptions$.next(chartOptionsAdapter(data.reduce((curr,next) => calculateStatus(curr,next['date']),[0,0]) as unknown as number[]));
    }
    );
  }
}
/**
 * 
 * @param seriesArr first value will be sum of pending inspections : upcoming ones
 *                  second value will be sum of done inspections : passed ones
 * @param dateString date of corresponding inspection
 * @returns {seriesArr: number[]}
 */
const calculateStatus = (seriesArr: any,dateString:string) => {
  const date = new Date(dateString).getTime();
  if(date >= new Date().getTime()) seriesArr[0] += 1;
  else seriesArr[1] += 1;
  return seriesArr;
}