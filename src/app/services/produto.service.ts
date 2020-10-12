import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Produto } from '../models/produto';
 
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private ColletionProd: any ="produtos";
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
        codigo : produto.codigo
      }
    );
  }
  gerarTodos() {
    return this.fireDB.collection<Produto>(this.ColletionProd).snapshotChanges()
      .pipe(
        map(
          dados => dados.map(d => ({ id: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }
  get(id:string){
    return this.fireDB.collection(this.ColletionProd).doc<Produto>(id).valueChanges();
  }
}
