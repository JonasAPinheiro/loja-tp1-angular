import { Component, input,   output, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { QuantidadeControle } from "../../../shared/quantidade-controle/quantidade-controle";
import { CurrencyPipe } from '@angular/common';
import { DescontoPipe } from '../../../shared/pipes/desconto/desconto-pipe';
import { TruncarPipe } from '../../../shared/pipes/truncar/truncar-pipe';
@Component({
  selector: 'app-card-produto',
  imports: [QuantidadeControle, CurrencyPipe, DescontoPipe, TruncarPipe],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {
  produto = input.required<Produto>();
  categoria = input.required<String>();

  qtde = signal<number>(0);

  add = output<{id: number, quantity: number}>();
  view = output<number>();

  onAdd() {
    this.add.emit({id: this.produto().id, quantity: this.qtde()});
  }

  onview() {
    this.view.emit(this.produto().id);
  }
}
