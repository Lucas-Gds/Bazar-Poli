import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
})
export class ProdutoListPage implements OnInit {
  public produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.produtoService.gerarTodos().subscribe(
      resultado => {
        this.produtos = resultado;
      }
      )
  }
}
