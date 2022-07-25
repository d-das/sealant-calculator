import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'contact', 
    loadChildren: () => import('./contact/contact.module').then( x => x.ContactPageModule) 
  },
  { path: 'instructions', 
    loadChildren: () => import('./instructions/instructions.module').then( x => x.InstructionsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
