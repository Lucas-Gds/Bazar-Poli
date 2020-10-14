import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from 'src/app/models/produto';
import { MessageService } from 'src/app/services/message.service';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.page.html',
  styleUrls: ['./produto-form.page.scss'],
})
export class ProdutoFormPage implements OnInit {

  public id: string = null;
  public produto: Produto = new Produto;


  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private msg:MessageService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.produtoService.get(this.id).subscribe(
        res => {
          this.produto = res
        }
      )
    }
  }

  AddProd(form) {
    //console.log(this.usuario);
    console.log(form);
    if (form.valid) {
      this.msg.presentLoading()
      if (!this.id) {
        this.produtoService.add(this.produto).then(
          res => {
            console.log("Cadastrado!", res);
            form.reset();
            this.produto = new Produto;
            this.msg.presentAlert("Aviso", "Produto cadastrado!");
            this.msg.dismissLoading();
            this.router.navigate([""]);
          },
          err => {
            console.error("Erro:", err);
            this.msg.dismissLoading();
            this.msg.presentAlert("Erro:", "Produto não cadastrado!");
          }
        ).finally(
          ()=> this.msg.dismissLoading()
        )
      } else {
        this.produtoService.att(this.produto, this.id).then(
          res => {
            console.log("Atualizado!", res);
            form.reset();
            this.produto = new Produto;
            this.msg.presentAlert("Aviso", "Produto atualizado!");
            this.msg.dismissLoading();
            this.router.navigate(["/tabs/produtoPerfil/",this.id]);
          },
          err => {
            console.error("Erro:", err);
            this.msg.dismissLoading();
            this.msg.presentAlert("Erro:", "Produto não atualizado!");
          }
        )
      }
    }

  }

}
