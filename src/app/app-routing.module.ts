import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./homepage-module/homepage-module.module').then(m => m.HomepageModuleModule) 
  },
  { 
    path: 'details',
    loadChildren: () => import('./details-module/details.module').then(m => m.DetailsModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
