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

  listaPensamentos: Pensamento[] = [
    {
      conteudo: 'A vida é uma jornada cheia de altos e baixos, repleta de aprendizados e momentos que nos moldam. Cada dia é uma nova oportunidade para crescer, explorar e viver intensamente. É importante valorizar as pequenas coisas, cultivar relacionamentos e buscar a felicidade nas simples alegrias do cotidiano. O futuro é uma página em branco, e cabe a nós escrever uma história incrível!',
      autoria: 'Gustavo',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Angular',
      autoria: 'Gustavoooo',
      modelo: 'modelo2'
    }
  ];
}
