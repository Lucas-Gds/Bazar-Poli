import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'usuarioList',
        loadChildren: () => import('../pages/usuario-list/usuario-list.module').then(m => m.UsuarioListPageModule)
      },
      {
        path: 'lojaLocais',
        loadChildren: () => import('../pages/loja-locais/loja-locais.module').then( m => m.LojaLocaisPageModule)
      },
      {
        path: 'lojaForm',
        loadChildren: () => import('../pages/loja-form/loja-form.module').then( m => m.LojaFormPageModule)
      },
      {
        path: 'usuarioForm',
        loadChildren: () => import('../pages/usuario-form/usuario-form.module').then( m => m.UsuarioFormPageModule)
      },
      {
        path: 'usuarioForm/:id',
        loadChildren: () => import('../pages/usuario-form/usuario-form.module').then( m => m.UsuarioFormPageModule)
      },
      {
        path:'produtoForm',
        loadChildren:() => import ('../pages/produto-form/produto-form.module').then(m => m.ProdutoFormPageModule)
      },
      {
        path:'produtoForm/:id',
        loadChildren:() => import ('../pages/produto-form/produto-form.module').then(m => m.ProdutoFormPageModule)
      },
      {
        path: 'usuarioPerfil/:id',
        loadChildren: () => import('../pages/usuario-perfil/usuario-perfil.module').then( m => m.UsuarioPerfilPageModule)
      },
      {
        path: 'usuarioPerfil',
        loadChildren: () => import('../pages/usuario-perfil/usuario-perfil.module').then( m => m.UsuarioPerfilPageModule)
      },
      {
        path: 'produtoPerfil/:id',
        loadChildren: () => import('../pages/produto-perfil/produto-perfil.module').then( m => m.ProdutoPerfilPageModule)
      },
      {
        path: 'produtoList',
        loadChildren: () => import('../pages/produto-list/produto-list.module').then( m => m.ProdutoListPageModule)
      },
      {
        path: 'mapa',
        loadChildren: () => import('../pages/map-loja/map-loja.module').then( m => m.MapLojaPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
