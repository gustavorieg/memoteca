import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent, Pensamento } from '../pensamento/pensamento.component';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterLink,
    PensamentoComponent
  ],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos: Pensamento[] = [];
}
