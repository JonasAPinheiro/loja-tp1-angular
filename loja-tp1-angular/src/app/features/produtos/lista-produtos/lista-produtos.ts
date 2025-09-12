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
      nome: "Pelucia Pikachu",
      descricao: "Desc. Prod 1",
      preco: 179.90,
      imageURL: 'https://entertainmentcenternl.com/cdn/shop/products/Pikachu-Plush.jpg?v=1616780856&width=713',
      promo: true
    },
    {
      id: 2,
      nome: "Pelucia Mega Charizard X",
      descricao: "Desc. Prod 2",
      preco: 179.90,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5fAA5POrHMKtq0JWfO-5Pmq7lHODEx73-A&s",
      estado: "novo"
    },
    {
      id: 3,
      nome: "Pelucia Mewtwo",
      descricao: "Desc. Prod 3",
      preco: 179.90,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9Go84D0PdkfsHr817Zq7LbfyEvSsPiqY3g&s",
      estado: "esgotado",
    },
    {
      id: 4,
      nome: "Pelucia Ash Greninja",
      descricao: "Desc. Prod 4",
      preco: 279.90,
      imageURL: "https://entertainmentcenternl.com/cdn/shop/files/greninja.png?v=1716389591&width=713",
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
