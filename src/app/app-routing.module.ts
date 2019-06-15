import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '**', loadChildren: './intro/intro.module#IntroPageModule' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
