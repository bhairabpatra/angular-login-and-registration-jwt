import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './components/sigin/sigin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'login', component: SiginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'app',
    canActivate:[AuthGuard],
    component: DashboardComponent,
    children: [
      { path: 'expenses', component: ExpensesComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
