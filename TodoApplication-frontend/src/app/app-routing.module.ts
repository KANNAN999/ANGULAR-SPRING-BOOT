import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './Service/route-guard.service';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

const routes: Routes = [
  
{path:"",component: LoginComponent},
{path:"login",component:LoginComponent},
{path:"welcome/:userName",component:WelcomeComponent,canActivate:[RouteGuardService]},
{path:"todos",component:ListTodosComponent,canActivate:[RouteGuardService]},
{path:"menu",component: MenuComponent},
{path:"footer",component:FooterComponent},
{path:"logout",component:LogoutComponent,canActivate:[RouteGuardService]},
{path:"update/:id",component:TodoUpdateComponent,canActivate:[RouteGuardService]},
{path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
