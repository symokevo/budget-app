import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-expenses-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expenses-form.component.html',
  styleUrl: './expenses-form.component.scss'
})
export class ExpensesFormComponent {
  expensesForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.expensesForm = this.fb.group({
      price: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.expensesForm.invalid) {
      console.log(this.expensesForm.value);
    } else {
      this.expensesForm.markAllAsTouched();
    }
  }

}
