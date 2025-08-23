import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @ViewChild("meuTitulo") titulo!: ElementRef;

  ngAfterViewInit() {
    const titulo: string = "Aula 2 - Conhecendo um pouco de Angular";
    this.titulo.nativeElement.textContent = titulo;
  }
}
