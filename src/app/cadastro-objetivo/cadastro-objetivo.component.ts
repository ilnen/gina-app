import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-cadastro-obj',
    templateUrl: './cadastro-objetivo.component.html',

})
export class CadastroObjetivoComponent{

    constructor(){}

    CadForm = new FormGroup({
        desafio: new FormControl(''),
        resumo: new FormControl('')
      })

    onCadastrarObjetivo(){
        alert('Desafio cadastrado!');
    }

}
