import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public user: any;
  public produtos: Produto[] = [];
  constructor(
    public usuarioService: UsuarioService,
    public produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.produtoService.gerarTodos().subscribe(
      resultado => {
        this.produtos = resultado;
      }
      )
  }

  ionViewWillEnter() {
    this.verfUser()
  }

  async verfUser() {
    await this.usuarioService.auth.user.subscribe(
      res => {
        if (res)
          this.usuarioService.get(res.uid).subscribe(
            res => {
              this.user = res;
              console.log(res);
            }
          )
      },
      err => {
        this.user = null
      }
    )
  }
}
