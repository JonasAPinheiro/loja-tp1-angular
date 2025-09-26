import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../core/services/logger/logger.service';
import { Produto } from '../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  logger = inject(LoggerService);

  private readonly listaMock: Produto[] = [
      {
        id: 1,
        nome: "Pelúcia Pikachu",
        descricao: "Desc. Prod 1",
        preco: 179.90,
        imageURL: 'https://entertainmentcenternl.com/cdn/shop/products/Pikachu-Plush.jpg?v=1616780856&width=713',
        promo: true
      },
      {
        id: 2,
        nome: "Pelúcia Mega Charizard X",
        descricao: "Desc. Prod 2",
        preco: 179.90,
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5fAA5POrHMKtq0JWfO-5Pmq7lHODEx73-A&s",
        estado: "novo"
      },
      {
        id: 3,
        nome: "Pelúcia Mewtwo",
        descricao: "Desc. Prod 3",
        preco: 179.90,
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9Go84D0PdkfsHr817Zq7LbfyEvSsPiqY3g&s",
        estado: "esgotado",
      },
      {
        id: 4,
        nome: "Pelúcia Ash Greninja",
        descricao: "Desc. Prod 4",
        preco: 279.90,
        imageURL: "https://entertainmentcenternl.com/cdn/shop/files/greninja.png?v=1716389591&width=713",
        estado: "novo",
      }
    ]

    listar(): Observable<Produto[]>{
        this.logger.info("[ProdutoService] = Listando produtos");
        return of(this.listaMock).pipe(delay(1000));
    }

    getById(id:number): Observable<Produto | undefined>{
      return of(this.listaMock.find(p => p.id == id)).pipe(delay(500));
    }
}
