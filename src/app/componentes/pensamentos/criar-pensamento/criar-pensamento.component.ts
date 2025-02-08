import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { randomFillSync, randomInt } from 'crypto';
import * as moderndash from 'moderndash';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css',
  providers: [
    PensamentoService
  ]
})
export class CriarPensamentoComponent{

  pensamento: Pensamento = {
    id: moderndash.randomInt(1, 999),
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento(){
    alert("Cancelar pensamento!")
  }
}
