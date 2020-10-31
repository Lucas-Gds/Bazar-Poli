import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LojaLocaisPage } from './loja-locais.page';

describe('LojaLocaisPage', () => {
  let component: LojaLocaisPage;
  let fixture: ComponentFixture<LojaLocaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaLocaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LojaLocaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
