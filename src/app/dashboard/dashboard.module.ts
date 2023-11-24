import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';


const routes: Route[] = [
  { path: "",pathMatch:"full", component: DashboardComponent},
  { path: "inspection",pathMatch:"full", component: DashboardComponent},
]
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
