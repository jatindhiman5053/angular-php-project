import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './container/header/header.component';
import { HomeComponent } from './container/home/home.component';
import { AboutComponent } from './container/about/about.component';
import { BlogComponent } from './container/blog/blog.component';
import { ContactComponent } from './container/contact/contact.component';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { DefaultComponent } from './container/default/default.component';
import { LoginComponent } from './container/header/login/login.component';
import { RegisteruserComponent } from './container/header/login/registeruser/registeruser.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { insertService } from './services/insert.service';
import { updateService } from './services/update.service';
import { deleteService } from './services/delete.service';
import { all_fetchService } from './services/fetch_all.service';
import { single_fetch_Service } from './services/fetch_single.service';
import { searchService } from './services/search.service';
import { authService } from './services/auth.service';
import { userService } from './services/user.service';




@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PageNotFoundComponent,
    DefaultComponent,
    LoginComponent,
    RegisteruserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TreeTableModule,
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule
  ],
  providers: [
    provideClientHydration(),
    insertService,
    updateService,
    deleteService,
    all_fetchService,
    single_fetch_Service,
    searchService,
    authService,
    userService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
