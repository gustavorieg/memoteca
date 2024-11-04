import { CommonModule } from '@angular/common';
import { Component, input, Input, output, Output } from '@angular/core';
import { EventEmitter } from 'stream';

export interface Pensamento {
  conteudo: string;
  autoria: string;
  modelo: string;
}

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  pensamento = input.required<Pensamento>();

  larguraPensamento(): string{
    if(this.pensamento.length >= 256){
      return 'pensamento-g';
    }
    console.log(this.pensamento.conteudo);
    return 'pensamento-p';
  }
}
