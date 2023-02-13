import { Component } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent {
  public displayTheme() {
    const section = document.getElementById('container__theme');
    const arrow   = document.getElementById('arrow__theme');
    const secTheme = document.getElementById('themes');

    section!.classList.toggle('container__theme-active');
    arrow!.classList.toggle('arrow__theme-active');
    secTheme!.classList.toggle('themes-active')
  }
}
