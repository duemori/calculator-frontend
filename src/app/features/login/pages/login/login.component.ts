import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (
    private fb: FormBuilder,
    private auth: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router) {}

  loginForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.email])
    ],
    password: [null, Validators.required]
  });

  onSubmit(): void {
    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;

    this.auth.login(email, password).subscribe({
      next: data => {
        this.tokenStorageService.set(data.access_token);
        this.router.navigate(['']);
      }
    });
  }
}
