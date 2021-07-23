import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CadastroObjetivoComponent } from './cadastro-objetivo/cadastro-objetivo.component';
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";


const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'objetivo', component: CadastroObjetivoComponent, canActivate: [AngularFireAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
