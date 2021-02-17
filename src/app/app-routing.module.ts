import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-annonce',
    loadChildren: () => import('./add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule)
  },
  {
    path: 'update-annonce/:id',
    loadChildren: () => import('./add-annonce/add-annonce.module').then( m => m.AddAnnoncePageModule)
  },
  {
    path: 'list-annonces',
    loadChildren: () => import('./list-annonces/list-annonces.module').then( m => m.ListAnnoncesPageModule)
  },
  {
    path: 'view-annonce/:id',
    loadChildren: () => import('./view-annonce/view-annonce.module').then( m => m.ViewAnnoncePageModule)
  },
  {
    path: 'list-posts',
    loadChildren: () => import('./list-posts/list-posts.module').then( m => m.ListPostsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
