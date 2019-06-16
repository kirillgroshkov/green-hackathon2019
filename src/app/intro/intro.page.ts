import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: 'intro.page.html',
  styleUrls: ['intro.page.scss'],
})
export class IntroPage {
  constructor (
    private router: Router,
  ) {}

  @ViewChild('slides')
  slides: IonSlides

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  }

  async next () {
    if (await this.slides.isEnd()) {
      return this.router.navigate(['/home'])
    }
    this.slides.slideNext()
  }
}
