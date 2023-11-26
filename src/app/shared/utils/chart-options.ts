import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexFill
  } from "ng-apexcharts";

  export function chartOptionsAdapter(series: number[]) :ChartOptions {
    return {
        series: series,
        chart: {
          width: 500,
          type: "pie"
        },
        labels: ["Pending Inspections", "Done Inspections"],
        fill: {
          colors: ["#001F3F" , "#0074E4"]
        },
        colors: ["#001F3F" , "#0074E4"],
        responsive: [
          {
            breakpoint: 850,
            options: {
              chart: {
                width: 400
              },
              legend: {
                position: "bottom"
              }
            }
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
  }
  export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    colors: string[];
    fill: ApexFill
  };
