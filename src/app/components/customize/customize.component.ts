import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ApiColors, ApiImages } from '../../services/api';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {

  constructor(private service: ApiService) { }

  public colors: ApiColors[] = [];
  private images: ApiImages[] = [];

  ngOnInit(): void {
      this.service.color().subscribe( color => {
        this.colors = color
      });
      this.service.images().subscribe( image => {
        this.images = image
      });
  }

  public displayTheme() {
    const section  = document.getElementById('container__theme');
    const arrow    = document.getElementById('arrow__theme');
    const secTheme = document.getElementById('themes');
    const btnTheme = document.querySelectorAll('.btn__option');

    section!.classList.toggle('container__theme-active');
    arrow!.classList.toggle('arrow__theme-active');
    secTheme!.classList.toggle('themes-active');

    for(let i = 0; i < btnTheme.length; i++) {
      let newBtn = btnTheme[i] as HTMLElement;

      newBtn.style.backgroundColor = this.colors[i].color;
      newBtn.style.border = `1px solid ${this.colors[i].colorText}`
    }
  }
}
