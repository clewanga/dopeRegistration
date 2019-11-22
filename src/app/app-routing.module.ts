import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent

  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
