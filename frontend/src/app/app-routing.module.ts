import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {HelloWorldComponent} from "./component/hello-world/hello-world.component";
import {AuthGuard} from "./service/auth-guard";
import {RegisterComponent} from "./component/register/register.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
