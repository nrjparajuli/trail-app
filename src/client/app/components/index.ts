import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TrailComponent } from './trail/trail.component';
import { HomeComponent } from './home/home.component';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  RegisterComponent,
  TrailComponent,
  SigninComponent
	TrailComponent,
  HomeComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './register/register.component';
export * from './trail/trail.component';
export * from './signin/signin.component';
export * from './home/home.component';
