import { Component } from '@angular/core'

@Component({
  selector: 'app-intro',
  templateUrl: 'intro.page.html',
  styleUrls: ['intro.page.scss'],
})
export class IntroPage {
  constructor () {}

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  }
}
