import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Produto } from '../models/produto';
 
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private ColletionProd : any ="produto";
  constructor(
    private fireDB: AngularFirestore
  ) { }

  add(produto: Produto) {
    return this.fireDB.collection<Produto>(this.ColletionProd).add(
      {
        nome: produto.nome,
        valor: produto.valor,
        quantidade: produto.quantidade,
        ativo: produto.ativo,
        id: produto.id
      }
    );
  }
}
