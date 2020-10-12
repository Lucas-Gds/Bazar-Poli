import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioPerfilPage } from './usuario-perfil.page';

describe('UsuarioPerfilPage', () => {
  let component: UsuarioPerfilPage;
  let fixture: ComponentFixture<UsuarioPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
