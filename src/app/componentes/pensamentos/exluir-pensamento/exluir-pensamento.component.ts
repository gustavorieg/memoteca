import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-exluir-pensamento',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './exluir-pensamento.component.html',
  styleUrl: './exluir-pensamento.component.css',
  providers: [
    PensamentoService
  ]
})
export class ExluirPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
