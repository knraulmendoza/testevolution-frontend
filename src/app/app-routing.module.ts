import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NavMenuComponent } from './pages/nav-menu/nav-menu.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { 
    path: 'nav',
    component: NavMenuComponent,
    children: [
      {
        path: 'mapa',
        component: MapaComponent
      }
      ],
      canActivate: [LoginGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
