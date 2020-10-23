import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.page.html',
  styleUrls: ['./usuario-perfil.page.scss'],
})
export class UsuarioPerfilPage implements OnInit {

  public id: string = null;
  public usuario: Usuario = new Usuario;
  public nome: string = "Usuário";
  public preview: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router,
    private camera: Camera
  ) { }

  ngOnInit() {
    this.verfUser();
  }

  async verfUser() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.usuarioService.get(this.id).subscribe(
        res => {
          this.usuario = res
          this.nome = res.nome;
        }
      )
    } else {
      await this.usuarioService.auth.user.subscribe(
        res => {
          this.id = res.uid
          this.usuarioService.get(this.id).subscribe(
            res => {
              this.usuario = res
              this.nome = res.nome;
            }
          )
        }
      )
    }
  }
  alterarFoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.preview = 'data:image/jpeg;base64,' + imageData;
        this.usuario.foto = this.preview;
        console.log(this.usuario.foto);
      }, (err) => {
        // Handle error
        console.log("Camera issue: " + err);
      });
  }
  logout() {
    this.usuarioService.auth.signOut().then(
      () => this.router.navigate(["/"])
    )
  }

}
