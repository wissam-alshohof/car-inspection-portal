import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthModule as Auth } from '@angular/fire/auth';


const routes: Route[] = [
  {path: "", component: RegisterComponent}
]
@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    Auth
  ]
})
export class AuthModule { }
