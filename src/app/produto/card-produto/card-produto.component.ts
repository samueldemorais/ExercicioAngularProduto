import { Component } from '@angular/core';
import {Produto} from '../../shared/modelo/produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent {
  produto: Produto;
  produtos: Array<Produto>;

  constructor() {
    this.produto = new Produto();
    this.produtos = new Array<Produto>();
  }

  inserirProduto(): void {
    this.produtos.push(this.produto);
    this.produto = new Produto();
  }

}
