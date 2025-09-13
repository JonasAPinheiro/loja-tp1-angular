import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  logger = inject(LoggerService);

  private readonly listaCategoria: String[] = [
    "Fogo",
    "Água",
    "Raio",
    "Psíquico"
  ]

  listarCategoria(): Observable<String[]>{
    this.logger.info("[CategoriaService] = Listando categorias");
    return of(this.listaCategoria).pipe(delay(1000));
  }
}
