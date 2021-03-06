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
    return this.fireDB.collection(this.ColletionProd).add(
      {
        nome: produto.nome,
        valor: produto.valor,
        quantidade: produto.quantidade,
        foto: produto.foto ? produto.foto: null,
        galeria: produto.galeria ? produto.galeria: null,
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
  att(produto:Produto, id:string){
    return this.fireDB.collection(this.ColletionProd).doc(id).update(produto);
  }
  remove(id:string){
    return this.fireDB.collection(this.ColletionProd).doc(id).delete();
  }
  updatePhoto(id:string,index:number,fotos:string[]){
    return this.fireDB.collection(this.ColletionProd).doc(id).update({
      galeria:fotos,
      foto:index
    })
 
  }
 
}
