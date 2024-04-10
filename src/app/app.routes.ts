import { Routes } from '@angular/router';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ExpensesFormComponent } from './pages/expenses-form/expenses-form.component';

export const routes: Routes = [
  { path: '', component: ExpensesComponent },
  { path: 'expenses-form', component: ExpensesFormComponent },
  { path: 'expenses-form/:id', component: ExpensesFormComponent },
];
