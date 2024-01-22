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

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blogs", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "login/register", component: RegisteruserComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
