export class Produto {

    constructor(public nome = '',
                public preco?: number,
                public codigoBarra: string = '') {
    }
  }