import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseService } from '../../core/services/expense.service';

@Component({
  selector: 'app-expenses-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expenses-form.component.html',
  styleUrl: './expenses-form.component.scss'
})
export class ExpensesFormComponent implements OnInit{
  expensesForm!: FormGroup;

  constructor(private fb: FormBuilder, private expensesService: ExpenseService) {
    this.expensesForm = this.fb.group({
      price: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.expensesForm.invalid) {
      console.log(this.expensesForm.value);
    } else {
      this.expensesForm.markAllAsTouched();
    }
  }

}
