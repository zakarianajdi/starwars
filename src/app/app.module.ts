import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth-guard.service';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { HttpClientModule } from '@angular/common/http';
import { ListService } from './services/list.service';
import { SingleElementComponent } from './single-element/single-element.component';
import { AddElementComponent } from './add-element/add-element.component';
import { EditElementComponent } from './edit-element/edit-element.component';

const appRoutes: Routes = [
  { path: 'liste', canActivate: [AuthGuard], component: ListComponent },
  { path: 'liste/:name', canActivate: [AuthGuard], component: SingleElementComponent },
  { path: 'home', canActivate: [AuthGuard], component: ListComponent },
  { path: 'add-element', canActivate: [AuthGuard], component: AddElementComponent },
  { path: 'edit-element/:name', canActivate: [AuthGuard], component: EditElementComponent },
  { path: 'login', component: AuthComponent },
  { path: '', component: ListComponent },
  { path: 'not-found', component: FourOFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavBarComponent,
    ListComponent,
    SingleElementComponent,
    AddElementComponent,
    EditElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  
  providers: [
    AuthService,
    AuthGuard,
    ListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
