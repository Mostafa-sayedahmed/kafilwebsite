import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'كفيل';

  public textDir;
  lang = sessionStorage.getItem('lang');

  constructor() {
    console.log(this.lang);
    if (this.lang === 'ar') {
      this.textDir = 'rtl';
    } else {
      this.textDir = 'ltr';
    }
    console.log(this.textDir);
  }
}
