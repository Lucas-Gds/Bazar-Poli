import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Loja } from 'src/app/models/loja';
@Component({
  selector: 'app-map-loja',
  templateUrl: './map-loja.page.html',
  styleUrls: ['./map-loja.page.scss'],
})
export class MapLojaPage implements OnInit {

  public lat: number = -22.500;
  public lng: number = -46.500;
  public zoom: number = 17;
  mapType = 'satellite';
  public title: string = "Minha localização";
  public loja: Loja = new Loja;


  constructor(
    private geolocation: Geolocation,
  ) {}

  ngOnInit() {
    this.getLocal();
  }
  getLocal() {
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        this.loja.lat = this.lat;
        this.loja.lng = this.lng;
      }
    ).catch((error) => {
      console.log('Error getting location', error);
    }
    );
  }

}
