import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
