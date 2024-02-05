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
import { LoginComponent } from './container/login/login.component';
import { RegisteruserComponent } from './container/registeruser/registeruser.component';
import { ForgotpasswordComponent } from './container/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './container/changepassword/changepassword.component';
import { AdminHomeComponent } from './container/admin-home/admin-home.component'
import { FeedbackComponent } from './container/feedback/feedback.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { NgSelectModule } from '@ng-select/ng-select';


import { insertService } from './services/insert.service';
import { updateService } from './services/update.service';
import { deleteService } from './services/delete.service';
import { all_fetchService } from './services/fetch_all.service';
import { single_fetch_Service } from './services/fetch_single.service';
import { searchService } from './services/search.service';
import { authService } from './services/auth.service';
import { userService } from './services/user.service';
import { forgot_password } from './services/forgot_password.service';
import { ChangePassword } from "./services/change_password.service";
import { user_fetch_data } from './services/user_fetch_data.service';
import { NodeService } from './services/sample_data.service';
import { all_user } from './services/all_user.service';
import { start_session } from './services/start_session.service';



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
    ForgotpasswordComponent,
    ChangepasswordComponent,
    AdminHomeComponent,
    FeedbackComponent,

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
    ButtonModule,
    CarouselModule,
    NgSelectModule,

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
    userService,
    forgot_password,
    ChangePassword,
    user_fetch_data,
    NodeService,
    all_user,
    start_session,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
