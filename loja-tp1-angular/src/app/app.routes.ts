import { Routes } from '@angular/router';
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';
import { ProdutoDetalhe } from './features/produtos/produto-detalhe/produto-detalhe';
import { Home } from './features/home/home';
import { Sobre } from './features/sobre/sobre';
import { ProdutosForm } from './features/produtos/produtos-form/produtos-form';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'produtos',component:ListaProdutos},
    {path:'produtos/novo', component: ProdutosForm},
    {path:'produtos/:id',component:ProdutoDetalhe},
    {path:'sobre', component:Sobre},
    {path:'**', redirectTo:''}
];