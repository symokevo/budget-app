import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IExpense } from '../../core/models/common.model';
import { ExpenseService } from '../../core/services/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenses: IExpense[] = [];
  totalExpenses = 0;

  constructor(private expensesService: ExpenseService) {}

  ngOnInit(): void {
    this.getAllExpenses();
  }

  getAllExpenses() {
    this.expensesService.getAllExpenses().snapshotChanges().pipe(
      map((expenses: any[]) => {
        return expenses.map(expense => ({
          key: expense.key,
          title: expense.title,
          price: expense.price,
          description: expense.description
        }));
      })
    ).subscribe((data: IExpense[]) => {
      this.expenses = data;
      this.totalExpenses = this.calculateTotalExpenses(data);
    });
  }

  calculateTotalExpenses(expenses: IExpense[]): number {
    return expenses.reduce((total, expense) => total + parseFloat(expense.price), 0);
  }
}
