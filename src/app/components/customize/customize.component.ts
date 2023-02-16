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
    const section      = document.getElementById('container__theme') as HTMLElement;
    const arrow        = document.getElementById('arrow__theme') as HTMLElement;
    const secTheme     = document.getElementById('themes') as HTMLElement;

    section!.classList.toggle('container__theme-active');
    arrow!.classList.toggle('arrow__theme-active');
    secTheme!.classList.toggle('themes-active');

    this.changeColors();
  }

  private changeColors () {
    const body         = document.body;
    const header       = document.querySelector('.container__header') as HTMLElement;
    const dateBody     = document.getElementById('dateBody') as HTMLElement;
    const falseCheck   = document.getElementById('demo__checkBox') as HTMLElement;
    const arrowDone    = document.getElementById('arrowDone') as HTMLElement;
    const arrowRefresh = document.getElementById('arrowRefresh') as HTMLElement;
    const btnCompleted = document.getElementById('btn__completed') as HTMLElement;
    const textTheme    = document.getElementById('title__theme') as HTMLElement;
    const btnCheck     = document.querySelectorAll('.check-task');
    const btnTheme     = document.querySelectorAll('.btn__option');

    const updateColorsText = (colorText: string) => {
      const styleProps = {
        color: colorText,
      };

      const elements = [header, dateBody, arrowDone, arrowRefresh, btnCompleted, textTheme];

      for (const element of elements) {
        Object.assign(element.style, styleProps);
      }
    }

    for(let i = 0; i < btnTheme.length; i++) {
      const newBtn      = btnTheme[i] as HTMLElement;
      const { color, colorText, borderForOpt } = this.colors[i];

      Object.assign(newBtn.style, {
        backgroundColor: color,
        border: `1px solid ${borderForOpt}`
      });

      newBtn.addEventListener('click', () => {
        Object.assign(body.style, {
          backgroundColor: color,
          color: borderForOpt
        });

        updateColorsText(colorText);
        falseCheck!.style.border  = `1px solid ${colorText}`;

        // btnCheck.forEach( btn => {
        //   const newBtnCheck = btn as HTMLElement

        //   if (newBtnCheck.classList.contains('check-active')) {
        //     newBtnCheck!.style.backgroundColor = borderForOpt;
        //   }
        // })
      });
    }
  }
}
