import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Loja } from 'src/app/models/loja';
import { LojaService } from 'src/app/services/loja.service';
@Component({
  selector: 'app-map-loja',
  templateUrl: './map-loja.page.html',
  styleUrls: ['./map-loja.page.scss'],
})
export class MapLojaPage implements OnInit {


  public zoom: number = 17;
  mapType = 'satellite';
  public title: string = "Minha localização";
  public loja: Loja = new Loja;
  public id:string = "";

  constructor(
    private geolocation: Geolocation,
    private activatedRoute: ActivatedRoute,
    private lojaService: LojaService,
  ) {}

  ngOnInit() {
    this.verificarLoja()
  }
  async verificarLoja() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.lojaService.get(this.id).subscribe(
        res => {
          
        this.loja = res
          
        })
    }
  }
//  getLocal(){
//     this.lojaService.getCordinates(this.loja.endereco, this.loja.numero, this.loja.bairro).subscribe(
//       resultado => {
//         console.log(resultado)
//         this.loja.latitude = resultado[0].lat
//         this.loja.longitude = resultado[0].lon
//         this.loja.lat = resultado[0].lat
//         this.loja.lng = resultado[0].lon
//       }
//     )
//   }

}
