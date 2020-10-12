import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutoPerfilPage } from './produto-perfil.page';

describe('ProdutoPerfilPage', () => {
  let component: ProdutoPerfilPage;
  let fixture: ComponentFixture<ProdutoPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
