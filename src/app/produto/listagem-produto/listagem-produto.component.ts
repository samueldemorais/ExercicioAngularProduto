import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {
produtos = [
  {nome: 'Produto 1', preco: 100, codigoBarra: '123456789'},
  {nome: 'Produto 2', preco: 200, codigoBarra: '123456789'},
  {nome: 'Produto 3', preco: 300, codigoBarra: '123456789'},
]
}
