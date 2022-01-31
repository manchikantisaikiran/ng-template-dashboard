import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ng-Template-Dashboard';

  lightMode = true;

  toggleMode(){
    this.lightMode = !this.lightMode;
    let theme;
    if(this.lightMode){
      theme = 'light'
    }else{
      theme = 'dark'
    }
    document.querySelector('body')?.setAttribute('data-theme',theme);
  }

}
