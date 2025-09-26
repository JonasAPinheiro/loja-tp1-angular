import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../../model/produto';
import { CurrencyPipe } from '@angular/common';
import { ProdutosService } from '../../services/produtos.service';
import { DescontoPipe } from '../../../shared/pipes/desconto/desconto-pipe';

@Component({
  selector: 'app-produto-detalhe',
  imports: [DescontoPipe, CurrencyPipe],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private produtoService = inject(ProdutosService);


  loading = signal(true);
  produto = signal<Produto | undefined>(undefined);

  constructor(){
    this.route.paramMap.subscribe( pm =>{
      const id = pm.get('id') ? Number(pm.get('id')) : NaN;
      if(isNaN(id)){
        this.produto.set(undefined);
        this.loading.set(false);
        return;
      }
      this.loading.set(true);
      this.produtoService.getById(id).subscribe(p => {
        this.produto.set(p);
        this.loading.set(false);
      });
    }
    )
  }

  voltar(){
    this.router.navigate(['/produtos']);
  }
}