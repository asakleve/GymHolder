import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { FriendsPage } from '../pages/friends/friends';
import { GroupsPage } from '../pages/groups/groups';
import { SettingsPage } from '../pages/settings/settings';
import { InloggPage } from '../pages/inlogg/inlogg';

import { GymprofilePage } from '../pages/gymprofile/gymprofile';
import { EventLeaderboardPage } from '../pages/eventLeaderboard/eventLeaderboard';
import { MapPage } from '../pages/map/map';
import { MyChallengesPage } from '../pages/my-challenges/my-challenges'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InloggPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Friends', component: FriendsPage },
      { title: 'Groups', component: GroupsPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Testlänk- Gymprofile', component: GymprofilePage },
      { title: 'Testlänk-EventLeaderboard', component: EventLeaderboardPage },
      { title: 'Testlänk- Map', component: MapPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
