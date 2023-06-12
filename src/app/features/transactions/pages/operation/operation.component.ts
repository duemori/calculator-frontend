import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { TransactionsService } from '../../services/transactions.service';
import { Operation } from '../../models/operation';

const PARAMS_VALIDATOR = Validators.compose([Validators.required, Validators.min(0.01), Validators.max(9999999.99)]);

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  parameters = 0;

  constructor(private fb: FormBuilder, private service: TransactionsService) { }

  operationForm = this.fb.group({
    operationId: [null, Validators.required],
    params: this.fb.array([
      [null, PARAMS_VALIDATOR]
      ,
      [null, PARAMS_VALIDATOR]
    ])
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

  onChange(value: any): void {
    this.parameters = this.operations.find(o => o.id === value)?.params ?? 0;

    if (this.parameters == 2 || this.parameters == 1) {
      this.setAndUpdate(this.operationForm.controls.params.controls[0]);
    } else {
      this.clearAndUpdate(this.operationForm.controls.params.controls[0]);
    }

    if (this.parameters == 0 || this.parameters == 1) {
      this.clearAndUpdate(this.operationForm.controls.params.controls[1]);
    } else {
      this.setAndUpdate(this.operationForm.controls.params.controls[1]);
    }
  }

  private clearAndUpdate(control: FormControl) {
    control.setValue(null);
    control.clearValidators();
    control.updateValueAndValidity();
  }

  private setAndUpdate(control: FormControl) {
    control.setValidators(PARAMS_VALIDATOR);
    control.updateValueAndValidity();
  }
}
