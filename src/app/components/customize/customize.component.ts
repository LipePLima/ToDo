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
    this.service.color().subscribe((colors: ApiColors[]) => {
      this.colors = colors;
    });
    this.service.images().subscribe((images: ApiImages[]) => {
      this.images = images;
    });
  }

  public displayTheme() {
    const body     = document.body;
    const header   = (<HTMLElement>document.querySelector('.container__header'));
    const section  = document.getElementById('container__theme');
    const arrow    = document.getElementById('arrow__theme');
    const secTheme = document.getElementById('themes');
    const btnTheme = document.querySelectorAll('.btn__option');

    section!.classList.toggle('container__theme-active');
    arrow!.classList.toggle('arrow__theme-active');
    secTheme!.classList.toggle('themes-active');

    for(let i = 0; i < btnTheme.length; i++) {
      const newBtn = btnTheme[i] as HTMLElement;
      const { color, colorText, border } = this.colors[i];

      Object.assign(newBtn.style, {
        backgroundColor: color,
        border: `1px solid ${border}`
      });

      newBtn.addEventListener('click', () => {
        Object.assign(body.style, {
          backgroundColor: color,
          color: border
        })

        Object.assign(header.style, {
          color: colorText
        })





      });
    }
  }
}
