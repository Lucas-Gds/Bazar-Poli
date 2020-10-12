import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-produto-perfil',
  templateUrl: './produto-perfil.page.html',
  styleUrls: ['./produto-perfil.page.scss'],
})
export class ProdutoPerfilPage implements OnInit {
  public id : string = null;
  public produto : Produto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoService : ProdutoService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id){
      this.produtoService.get(this.id).subscribe(
        res => {
          
          this.produto = res
  } )

} 
}
}
