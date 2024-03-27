import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { TabsPageComponent } from './tabs-page/tabs-page.component';

const routes: Routes = [
  {
    path:'tabs',
    component: TabsPageComponent,
    children: [
      { 
        path: 'home',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
        canActivate:[AuthenticationService]
      }
    ]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "my-custom-page-with-id",
    loadChildren: () => import('./my-custom/my-custom.module').then( m => m.MyCustomPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate:[AuthenticationService]
  },
  {
    path: 'login',
    loadChildren: () => import('./databinding/databinding.module').then( m => m.DatabindingPageModule)
  },
  { 
    path: 'component',
    loadChildren: () => import('./component/component.module').then( m => m.ComponentPageModule)
  },
  {
    path: 'component',
    loadChildren: () => import('./component/component.module').then( m => m.ComponentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

