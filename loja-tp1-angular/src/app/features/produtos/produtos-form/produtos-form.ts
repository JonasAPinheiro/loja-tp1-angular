import { Component, computed, inject, signal } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Router } from '@angular/router';
import { Produto } from '../../../model/produto';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-produtos-form',
  imports: [FormsModule],
  templateUrl: './produtos-form.html',
  styleUrl: './produtos-form.css'
})
export class ProdutosForm {
  private produtoService = inject(ProdutosService);
  private router = inject(Router);

  enviando = signal(false);
  mensagem = signal("");
  novaCategoria = signal("");
  categoriaSelecionada = signal("");

  novoProduto: Produto = {
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    imageURL: '',
    categoria: ''
  }

  private produtos = toSignal(this.produtoService.listar(), {initialValue: []});

  categorias = computed(() => {
    const lista =  this.produtos().map(p => p.categoria);
    const unicos = Array.from(new Set(lista));
    return [...unicos, "Outra"];
  });

  mostrarNovaCategoria = computed(() => this.categoriaSelecionada() == "Outra");

  onSubmit(form: NgForm){
    if(form.invalid){
      this.mensagem.set("Houve um erro de validação dos campos");
      return;
    }

    this.novoProduto.categoria = this.categoriaSelecionada() == "Outra" 
      ? this.novaCategoria()
      : this.categoriaSelecionada();

      this.enviando.set(true);
      this.mensagem.set("Enviando produto...");

      this.produtoService.criar(this.novoProduto).subscribe({
        next: (res) => {
          this.mensagem.set("Produto criado com sucesso!");
          console.log(res);
          form.resetForm();
          setTimeout(() => this.router.navigate(["/produtos"]), 120)
        },
        error: (res) => {
          this.mensagem.set("Houve um erro");
          console.log(res);
        },
        complete: () => this.enviando.set(false)
      })
  }

  onReturnToList(){
    this.router.navigate(["/produtos"]);
  }
}
