import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public currentScreenOrientation: string;
  constructor(private screenOrientation: ScreenOrientation) {
     // detecto la orientacion actual
     this.currentScreenOrientation = this.screenOrientation.type;
 
     // decto cuando la orientacion cambie
     this.screenOrientation.onChange().subscribe(
       () => {
         alert("Orientation Changed"+this.screenOrientation.type);
         this.currentScreenOrientation = this.screenOrientation.type;
       }
     );
  }

  public setLandscape(){
    // cambiar a horizontal
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
 
  public setPortrait(){
    // cambiar a vertical
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  public unlockScreen(){
    // desbloquear orientacion actual
    this.screenOrientation.unlock();
  }

}
