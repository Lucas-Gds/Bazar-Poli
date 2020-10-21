import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public user: any;

  constructor(
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {

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
