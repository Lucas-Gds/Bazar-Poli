import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private colletionUser: any = "usuarios";

  constructor(
    private fireDB: AngularFirestore,
    public auth: AngularFireAuth
  ) { }


  add(usuario: Usuario) {
    return this.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha).then(
      res => {
        //return this.fireDB.collection(this.colletionUser).add(
        return this.fireDB.collection(this.colletionUser).doc(res.user.uid).set(
          {
            nome: usuario.nome,
            email: usuario.email,
            tel: usuario.tel,
            ativo: usuario.ativo,
            //senha: usuario.senha
          }
        ).catch(
          () => {
            this.auth.user.subscribe(
              res => res.delete()
            )
          }
        );
      }
    )
  }
  getAll() {
    return this.fireDB.collection<Usuario>(this.colletionUser).snapshotChanges()
      .pipe(
        map(
          dados => dados.map(d => ({ id: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }

  get(id:string){
    return this.fireDB.collection(this.colletionUser).doc<Usuario>(id).valueChanges();
  }
  update(usuario:Usuario, id:string){
    usuario.lat = usuario.lng++;
    usuario.lng = usuario.lat++
    return this.fireDB.collection(this.colletionUser).doc(id).update(usuario);
  }
  remover(id:string){
    return this.fireDB.collection(this.colletionUser).doc(id).delete();
  }
}
