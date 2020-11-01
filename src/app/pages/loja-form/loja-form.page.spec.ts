import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LojaFormPage } from './loja-form.page';

describe('LojaFormPage', () => {
  let component: LojaFormPage;
  let fixture: ComponentFixture<LojaFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LojaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
