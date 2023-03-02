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

  public selectTheme: string = 'cor';
  public colors: ApiColors[] = [];
  public images: ApiImages[] = [];
  private btns!: NodeListOf<HTMLElement>;

  ngOnInit(): void {
    this.service.color().subscribe((colors: ApiColors[]) => {
      this.colors = colors;
    });
    this.service.images().subscribe((images: ApiImages[]) => {
      this.images = images;
    });
  }

  public displayTheme() {
    const section   = document.getElementById('container__theme') as HTMLElement;
    const arrow     = document.getElementById('arrow__theme') as HTMLElement;
    const secTheme  = document.getElementById('themes') as HTMLElement;
    const btnOption = document.querySelectorAll('.btn__theme') as NodeListOf<HTMLElement>;

    this.btns = btnOption;

    section!.classList.toggle('container__theme-active');
    arrow.classList.toggle('arrow__theme-active');
    secTheme!.classList.toggle('themes-active');

    btnOption[0].classList.add('btn__theme-selected');
  }

  public changeOptions (event: any) {
    const btnOption = event.currentTarget as HTMLElement;

    if (!btnOption.classList.contains('btn__theme-selected')) {
      this.btns.forEach( btn => {
        btn.classList.remove('btn__theme-selected');
      });

      btnOption.classList.add('btn__theme-selected');
    }

  }

  public changeColors (btn: any) {
    const btnParam   = btn.currentTarget as HTMLElement;
    const body       = document.body as HTMLElement;
    const falseCheck = document.getElementById('demo__checkBox') as HTMLElement;
    const btnCheck   = document.querySelectorAll('.check-task') as NodeListOf<HTMLElement>;
    const btnTheme   = document.querySelectorAll('.btn__option') as NodeListOf<HTMLElement>;
    const elements   = [
      document.querySelector('.container__header') as HTMLElement,
      document.getElementById('dateBody') as HTMLElement,
      document.getElementById('arrowDone') as HTMLElement,
      document.getElementById('arrowRefresh') as HTMLElement,
      document.getElementById('btn__completed') as HTMLElement,
      document.getElementById('title__theme') as HTMLElement
    ];

    const updateColorsText = (colorText: string) => {
      const styleProps = {
        color: colorText,
      };

      for (const element of elements) {
        Object.assign(element.style, styleProps);
      }
    }

    for(let i = 0; i < btnTheme.length; i++) {
      const { color, colorText, borderForOpt } = this.colors[i];

      btnTheme[i].addEventListener('click', () => {
        Object.assign(body.style, {
          backgroundColor: color,
          color: borderForOpt
        });

        const styleProps = {
          '--backColor-active': color,
          '--borderBtn': `2px solid ${borderForOpt}`,
          '--colorBtn': colorText,
        };

        for (const [prop, value] of Object.entries(styleProps)) {
          btnParam.style.setProperty(prop, value);
          for (let i = 0; i < this.btns.length; i++) {
            this.btns[i].style.setProperty(prop, value);
          }
        }

        updateColorsText(colorText);
        falseCheck.style.border  = `1px solid ${colorText}`;
      });
    }
  }

  public changeImage (btn: any) {
    const body      = document.body as HTMLElement;
    const btnImages = btn.target as HTMLElement;

    body.style.backgroundImage = btnImages.style.backgroundImage;

    // Object.assign(body.style, {
    //   background
    // })
  }
}
