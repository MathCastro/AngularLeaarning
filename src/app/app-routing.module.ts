import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { RegisterComponent } from './register/register.component'
import { UserDetailComponent } from './user-detail/user-detail.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}