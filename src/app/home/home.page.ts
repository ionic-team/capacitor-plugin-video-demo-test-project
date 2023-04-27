import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CapacitorPluginVideoDemo} from "../../../../capacitor-plugin-video-demo";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  video = <any>[];
  constructor() {}

  async playVideo(video: string) {
    await CapacitorPluginVideoDemo.playVideo(video)
  }
}
