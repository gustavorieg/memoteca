import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent, Pensamento } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento.service';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterLink,
    PensamentoComponent,
    HttpClientModule
  ],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
  providers: [
    PensamentoService
  ]
})
export class ListarPensamentoComponent {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService){}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
