import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['']
    });

  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.authService.signup(this.userForm.value).subscribe(() => this.router.navigate([this.authService.CONFIRM_PATH]));
  }
  signup(){

  }
}
