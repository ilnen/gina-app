import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CadastroObjetivoModule } from './cadastro-objetivo/cadastro-objetivo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    CadastroObjetivoModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
