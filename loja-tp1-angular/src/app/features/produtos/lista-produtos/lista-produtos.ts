import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Array<Produto> = [
    {
      id: 1,
      nome: "Produto 1",
      descricao: "Desc. Prod 1",
      preco: 179.90,
      imageURL: 'images/logoifsp.png',
      promo: true
    },
    {
      id: 2,
      nome: "Produto 2",
      descricao: "Desc. Prod 2",
      preco: 179.90,
      estado: "novo"
    },
    {
      id: 3,
      nome: "Produto 3",
      descricao: "Desc. Prod 3",
      preco: 179.90,
      estado: "esgotado",
    },
    {
      id: 4,
      nome: "Produto 4",
      descricao: "Desc. Prod 4",
      preco: 279.90,
      estado: "novo",
    }
  ]

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos.filter(p => p.promo) : this.produtos);

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
