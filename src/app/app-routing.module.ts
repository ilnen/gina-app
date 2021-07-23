import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CadastroObjetivoComponent } from './cadastro-objetivo/cadastro-objetivo.component';

const routes: Routes = [
  { path: 'login',
    component: AuthComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
