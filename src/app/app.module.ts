import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FotoComponent } from './foto/foto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    FormComponent
  ],
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
