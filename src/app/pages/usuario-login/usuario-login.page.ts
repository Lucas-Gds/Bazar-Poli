import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.page.html',
  styleUrls: ['./usuario-login.page.scss'],
})
export class UsuarioLoginPage implements OnInit {

  public email:string = "";
  public senha:string = "";

  constructor(
    public usuarioService:UsuarioService,
    private router:Router,
    private msg:MessageService
  ) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.usuarioService.auth.signInWithEmailAndPassword(this.email, this.senha).then(
      res=>{
        this.router.navigate(["/tabs/usuarioPerfil",res.user.uid]);
      },
      err=>{
        form.reset();
        console.log("Erro login:", err);
        this.msg.presentAlert("Erro", "E-mail ou senha invalidos! Usuário não localizado!");
      }
    )
  }

  RecoveryPass(email : string){
    this.usuarioService.auth.sendPasswordResetEmail(
      email,
      {url: 'http://localhost:8100'}
      
    ).then(
      ()=>{
        this.router.navigate(["/"]);
      },
    );
      
  }

}
