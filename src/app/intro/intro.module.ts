import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { IntroPage } from './intro.page'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: IntroPage }]),
  ],
  declarations: [IntroPage],
})
export class IntroPageModule {}
