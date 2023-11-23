import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { noAuthGuard } from './auth/no-auth.guard';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
    {path:"",pathMatch: "full", canMatch:[noAuthGuard], loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    {path:"dashboard", canMatch:[authGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
