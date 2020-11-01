import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapLojaPage } from './map-loja.page';

describe('MapLojaPage', () => {
  let component: MapLojaPage;
  let fixture: ComponentFixture<MapLojaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLojaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapLojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
