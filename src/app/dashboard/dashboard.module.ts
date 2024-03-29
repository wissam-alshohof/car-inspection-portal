import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { NewInspectionComponent } from './components/new-inspection/new-inspection.component';
import { HomeComponent } from './components/home/home.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";


const routes: Route[] = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", pathMatch: "full",redirectTo:"home" },
      { path: "home", component: HomeComponent },
      { path: "inspection", component: NewInspectionComponent },
    ]
  }
]
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarItemComponent,
    NewInspectionComponent,
    HomeComponent,
    MenuItemComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatTableModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
