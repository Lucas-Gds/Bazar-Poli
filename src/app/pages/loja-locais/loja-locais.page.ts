import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja-locais',
  templateUrl: './loja-locais.page.html',
  styleUrls: ['./loja-locais.page.scss'],
})
export class LojaLocaisPage implements OnInit {

  lat: 50;
  lng: 40;
  mapType = 'satellite';


  constructor() {}

  ngOnInit(){
    
  }
}
