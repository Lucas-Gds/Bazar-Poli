import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.page.html',
  styleUrls: ['./usuario-perfil.page.scss'],
})
export class UsuarioPerfilPage implements OnInit {

  public id: string = null;
  public usuario: Usuario = new Usuario;
  public nome: string = "Usuário";
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private usuarioService:UsuarioService,
      private router: Router
    ) { }
  
    ngOnInit() {
      this.verfUser();
    }

    async verfUser() {
      //this.id = this.activatedRoute.snapshot.paramMap.get("id");
      // if (this.id) {
      //   this.usuarioService.get(this.id).subscribe(
      //     res => {
      //       //this.usuario = new Usuario;
      //       this.usuario = res
      //       this.nome = res.nome;
      //     }
      //   )
      // }
      await this.usuarioService.auth.user.subscribe(
        res => {
          this.id = res.uid
          this.usuarioService.get(this.id).subscribe(
            res => {
              //this.usuario = new Usuario;
              this.usuario = res
              this.nome = res.nome;
            }
          )
        }
      )
    }
    logout(){
      this.usuarioService.auth.signOut().then(
        ()=> this.router.navigate(["/"])
      )
    }
   
}
