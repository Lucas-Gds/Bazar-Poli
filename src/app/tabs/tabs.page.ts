import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  public quantUsers: number = 0;
  public quantProds: number = 0;
  constructor(
    public usuarioService: UsuarioService,
    public produtoService: ProdutoService
  ) {}
  ngOnInit(): void {
    this.usuarioService.getAll().subscribe(
      res => this.quantUsers = res.length
      )
      this.produtoService.gerarTodos().subscribe(
        res => this.quantProds = res.length)
  }

}
