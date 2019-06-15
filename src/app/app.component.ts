import { Component, OnInit } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor (
    // private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
  ) {}

  async ngOnInit() {
    // await this.platform.ready()
    // this.statusBar.styleDefault()
    // this.splashScreen.hide()
  }
}
