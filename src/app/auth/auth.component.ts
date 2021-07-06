import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  AuthForm = new FormGroup({
    nomeUsuario: new FormControl(''),
    emailUsuario: new FormControl(''),
    grupoUsuario: new FormControl('')
  })


  ngOnInit(): void {
  }

  OnLogin(): void {
    console.log(this.AuthForm.value)
  }

  OnSignUp(): void {
    console.log(this.AuthForm.value)
  }





}
