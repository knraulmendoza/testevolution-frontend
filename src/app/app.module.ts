import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { PersonService } from './services/person.service';
import {ApiBase} from './helper/ApiBase';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './guards/auth.interceptor';
import { NavMenuComponent } from './pages/nav-menu/nav-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

import {NgbModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    MapaComponent,
    UsuarioComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService,
    PersonService,
    ApiBase,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
