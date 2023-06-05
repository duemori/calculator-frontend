import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { TransactionsService } from '../../transactions.service';
import { Operation } from '../../operation';


@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: TransactionsService) { }

  operationForm = this.fb.group({
    operationId: [null, Validators.required],
    userId: [null, Validators.compose([
      Validators.required, Validators.min(1), Validators.max(9999)])
    ],
    params: this.fb.array([
      [null, Validators.compose([
        Validators.required, Validators.min(0.01), Validators.max(9999999.99)])
      ],
      [null, Validators.compose([
        Validators.required, Validators.min(0.01), Validators.max(9999999.99)])
      ]])
  });

  operations: Operation[] = [];

  ngOnInit(): void {
    this.service.getOperations().subscribe({
      next: (result) => this.operations = result
    });
  }

  onSubmit(): void {
    this.service.postOperationTransaction(this.operationForm.value).subscribe({
      complete: () => this.operationForm.reset()
    });
  }
}
