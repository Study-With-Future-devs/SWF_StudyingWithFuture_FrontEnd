import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Aluno } from './pages/aluno/aluno';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: Login},
  { path: 'aluno', component: Aluno},
  { path: '**', redirectTo: '/login' } 
];
