import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutoListPage } from './produto-list.page';

describe('ProdutoListPage', () => {
  let component: ProdutoListPage;
  let fixture: ComponentFixture<ProdutoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
