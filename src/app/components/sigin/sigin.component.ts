import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['']
    });
  }

  get f() { return this.loginForm.controls; }


  login(){

  }

  onSubmit() {
    const loginRequest =  {
      email: this.f.email.value,
      password: this.f.password.value
    };

    if(this.authService.login(loginRequest)){

      this.router.navigate([this.authService.INITIAL_PATH])
    }
      // .subscribe((user) => this.router.navigate([this.authService.INITIAL_PATH]));
  }


}
