import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { VisionComponent } from './vision/vision.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';

import { LoginGuard } from './guard/login.guard';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabezeraComponent,
    VisionComponent,
    InstitucionComponent,
    ReglamentoComponent,
    PiepaginaComponent,
    MenuComponent,
    AdminComponent,
    EstudianteComponent,
    ProfesorComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent },
      {path: "home", component: HomeComponent },
      {path: "home/admin", component: AdminComponent, canActivate : [LoginGuard]},
      {path: "home/estudiante", component: EstudianteComponent, canActivate : [LoginGuard]},
      {path: "home/profesor", component: ProfesorComponent, canActivate : [LoginGuard]},
      {path: "home/vision", component: VisionComponent },
      {path: "home/instituto", component: InstitucionComponent },
      {path: "home/reglamento", component: ReglamentoComponent },
      {path: "home/logout", component: LogoutComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
