import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  errorMessage: string = '';
  signupErrorMessage: string = '';
  isSignupVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          if (error.status === 401 && error.error === "Incorrect password") {
            this.errorMessage = "Incorrect password. Please try again.";
          } else if (error.status === 401) {
            this.errorMessage = "Invalid email. Please try again.";
          } else {
            this.errorMessage = "An unexpected error occurred. Please try again.";
          }
          console.error('Login failed', error);
        }
      );
    }
  }

  onSignup(): void {
    if (this.signupForm.valid) {
      this.authService.register(this.signupForm.value).subscribe(
        response => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']);
        },
        error => {
          this.signupErrorMessage = "Registration failed. Please try again.";
          console.error('Registration failed', error);
        }
      );
    }
  }

  showSignup(event: Event): void {
    event.preventDefault();
    this.isSignupVisible = true;
  }

  hideSignup(event: Event): void {
    event.preventDefault();
    this.isSignupVisible = false;
  }
}
