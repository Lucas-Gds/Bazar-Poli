import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.page.html',
  styleUrls: ['./usuario-list.page.scss'],
})
export class UsuarioListPage implements OnInit {

  public usuarios: Usuario[] = []

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService.getAll().subscribe(
      res => {
        this.usuarios = res
      }
    )
  }

}
