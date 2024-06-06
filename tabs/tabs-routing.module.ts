import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[{
      
      path:'home',
      children:[{    
          path: '',
          loadChildren: () => import('../home/home.module').then((m) => m.HomePageModule)      
      }]
    },
    {
      path:'cart',
      children:[{    
          path: '',
          loadChildren: () => import('../cart/cart.module').then((m) => m.CartPageModule)      
      }]
    },
    {
      path:'blank',
      children:[{    
          path: '',
          loadChildren: () => import('../blank/blank.module').then((m) => m.BlankPageModule)      
      }]
    },
    {
      path:'blanks',
      children:[{    
          path: '',
          loadChildren: () => import('../blanks/blanks.module').then((m) => m.BlanksPageModule)      
      }]
    },
    {
      path:'history',
      children:[{    
          path: '',
          loadChildren: () => import('../history/history.module').then((m) => m.HistoryPageModule)      
      }]
    },
    {
      path:'settings',
      children:[{    
          path: '',
          loadChildren: () => import('../settings/settings.module').then((m) => m.SettingsPageModule)      
      }]
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
