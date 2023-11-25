import { Component, Input } from '@angular/core';
import { ChartOptions } from 'src/app/shared/utils/chart-options';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {


  @Input({required:true}) chartOptions!: ChartOptions | null;


  constructor() {}

}

