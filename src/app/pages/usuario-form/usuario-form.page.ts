import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario';
import { MessageService } from 'src/app/services/message.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.page.html',
  styleUrls: ['./usuario-form.page.scss'],
})
export class UsuarioFormPage implements OnInit {
  public id: string = null;
public usuario:Usuario = new Usuario;
public conf:string = "";

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private msg:MessageService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.usuarioService.get(this.id).subscribe(
        res => {
          this.usuario = res
        }
      )
    }
  }

  onSubmit(form) {
    //console.log(this.usuario);
    console.log(form);
    if (form.valid) {
      this.msg.presentLoading()
      if (!this.id) {
        this.usuarioService.add(this.usuario).then(
          res => {
            console.log("Cadastrado!", res);
            form.reset();
            this.usuario = new Usuario; // this.usuarios = []
            this.msg.presentAlert("Aviso", "Usuario cadastrado!");
            this.msg.dismissLoading();
            this.router.navigate([""]);
          },
          err => {
            console.error("Erro:", err);
            this.msg.dismissLoading();
            this.msg.presentAlert("Erro:", "Usuario não cadastrado!");
          }
        ).finally(
          ()=> this.msg.dismissLoading()
        )
      } else {
        this.usuarioService.update(this.usuario, this.id).then(
          res => {
            console.log("Atualizado!", res);
            form.reset();
            this.usuario = new Usuario;
            this.msg.presentAlert("Aviso", "Usuario atualizado!");
            this.msg.dismissLoading();
            this.router.navigate(["/tabs/usuarioPerfil/",this.id]);
          },
          err => {
            console.error("Erro:", err);
            this.msg.dismissLoading();
            this.msg.presentAlert("Erro:", "Usuario não atualizado!");
          }
        )
      }
    }

  }
}
