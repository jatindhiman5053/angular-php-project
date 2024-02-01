import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { ContactComponent } from './container/contact/contact.component';
import { BlogComponent } from './container/blog/blog.component';
import { AboutComponent } from './container/about/about.component';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { DefaultComponent } from './container/default/default.component';
import { LoginComponent } from './container/login/login.component';
import { RegisteruserComponent } from './container/registeruser/registeruser.component';
import { ForgotpasswordComponent } from './container/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './container/changepassword/changepassword.component';
import { AdminHomeComponent } from './container/admin-home/admin-home.component';
import { FeedbackComponent } from './container/feedback/feedback.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'default', component: DefaultComponent },
  { path: "home", component: HomeComponent },
  { path: "admin-Home", component: AdminHomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blogs", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "feedback", component: FeedbackComponent },
  { path: "login", component: LoginComponent },
  { path: "login/register", component: RegisteruserComponent },
  { path: "login/forgot-password", component: ForgotpasswordComponent },
  { path: "forgot-password/Change-Password", component: ChangepasswordComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
