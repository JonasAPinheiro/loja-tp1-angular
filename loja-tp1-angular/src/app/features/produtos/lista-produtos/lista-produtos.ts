import { Component, computed, inject, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutosService } from '../../services/produtos.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutosService);
  private router = inject(Router);
  loading = signal(true);

  private produtos = toSignal<Produto[], Produto[]>(this.produtoService.listar().pipe(finalize(() => this.loading.set(false))), {initialValue: []})

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos().filter(p => p.promo) : this.produtos());

  alternarPromo(){
    this.apenasPromo.update(p => !p);
  }

  onAddProduct(produto: {id: number, quantity: number}){
    alert(`Produto ${produto.id}\n${produto.quantity} unidades`);
  }

  onViewProduct(id: number){
    alert(`Id do produto: ${id}`);
  }
}
