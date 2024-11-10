import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  createAccountForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initializing the form with static data
    this.createAccountForm = this.fb.group({
      accountOwner: ['John Doe', Validators.required],  // Static data
      accountName: ['Acme Corporation', Validators.required],  // Static data
      accountNumber: ['AC12345'],  // Static data
      accountType: ['Business'],  // Static data
      industry: ['Technology'],  // Static data
      annualRevenue: ['5000000'],  // Static data
      phone: ['+1 800 555 1234'],  // Static data
      fax: ['+1 800 555 5678'],  // Static data
      website: ['www.acme.com'],  // Static data
      ownership: ['Private'],  // Static data
      employees: ['500'],  // Static data
      sicCode: ['1234'],  // Static data
      billingStreet: ['123 Elm St'],  // Static data
      billingCity: ['New York'],  // Static data
      billingState: ['NY'],  // Static data
      billingCode: ['10001'],  // Static data
      billingCountry: ['USA'],  // Static data
      shippingStreet: ['456 Oak St'],  // Static data
      shippingCity: ['Los Angeles'],  // Static data
      shippingState: ['CA'],  // Static data
      shippingCode: ['90001'],  // Static data
      shippingCountry: ['USA']  // Static data
    });
  }

  onSubmit() {
    if (this.createAccountForm.valid) {
      console.log(this.createAccountForm.value);
      // Submit form logic here
    }
  }
}
