import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TransactionsService } from '../../services/transactions.service';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  constructor(private fb: FormBuilder, private service: TransactionsService) { }

  creditForm = this.fb.group({
    amount: [null, Validators.compose([
      Validators.required, Validators.min(0.01), Validators.max(9999999.99)])
    ]
  });

  onSubmit(): void {
    this.service.postCreditTransaction(this.creditForm.value).subscribe({
      complete: () => this.creditForm.reset()
    });
  }
}
