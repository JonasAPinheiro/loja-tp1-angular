import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../core/services/logger/logger.service';
import { Produto, ProdutoMapper } from '../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  logger = inject(LoggerService);
  http = inject(HttpClient);

    listar(): Observable<Produto[]>{
        this.logger.info("[ProdutoService] = Listando produtos");
        return this.http.get<any[]>("https://fakestoreapi.com/products").pipe(
          map(lista => lista.map(json => ProdutoMapper.fromJson(json))),
          catchError(err => of([]))
        );
    }

    getById(id:number): Observable<Produto | unknown>{
      return this.http.get<any>(`https://fakestoreapi.com/products/${id}`).pipe(
        map(json => ProdutoMapper.fromJson(json)),
        catchError(err => of())
      )
    }
}
