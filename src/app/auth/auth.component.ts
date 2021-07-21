import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public auth: AngularFireAuth){}

  AuthForm = new FormGroup({
    nomeUsuario: new FormControl(''),
    emailUsuario: new FormControl(''),
    grupoUsuario: new FormControl('')
  })


  ngOnInit(): void {
  }

  OnLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  OnLogout() {
    this.auth.signOut
  }

  OnSignUp(): void {
    console.log(this.AuthForm.value)
  }





}
