import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar',
  pure: true
})
export class TruncarPipe implements PipeTransform {

  transform(texto: string, quantidade: number): string {
    return texto.slice(0, quantidade);
  }
}
