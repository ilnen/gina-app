import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CadastroObjetivoComponent } from './cadastro-objetivo.component';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
      CadastroObjetivoComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      MatInputModule,
      MatButtonModule,
      MatToolbarModule,
      FlexLayoutModule
    ],
    exports:[
      CadastroObjetivoComponent,
      MatInputModule,
      MatButtonModule,
      MatToolbarModule
    ]
  })

export class CadastroObjetivoModule{}
