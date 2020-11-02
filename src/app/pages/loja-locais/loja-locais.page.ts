import { Component, OnInit } from '@angular/core';
import { Loja } from 'src/app/models/loja';
import { LojaService } from 'src/app/services/loja.service';


@Component({
  selector: 'app-loja-locais',
  templateUrl: './loja-locais.page.html',
  styleUrls: ['./loja-locais.page.scss'],
})
export class LojaLocaisPage implements OnInit {
  
  public lojas: Loja[] = [];

  constructor(
    private lojaService: LojaService,
  ) {}

  ngOnInit(){
    this.loadLojas();
  }


  loadLojas() {
    this.lojaService.getAll().subscribe(
      res => {
        this.lojas = res
      }
    )
  }
}
