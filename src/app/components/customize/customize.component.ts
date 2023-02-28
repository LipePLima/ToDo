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
  private btns!: NodeListOf<Element>;

  ngOnInit(): void {
    this.service.color().subscribe((colors: ApiColors[]) => {
      this.colors = colors;
    });
    this.service.images().subscribe((images: ApiImages[]) => {
      this.images = images;
    });

    console.log(this.images)
  }

  public displayTheme() {
    const section   = document.getElementById('container__theme') as HTMLElement;
    const arrow     = document.getElementById('arrow__theme') as HTMLElement;
    const secTheme  = document.getElementById('themes') as HTMLElement;
    const btnOption = document.querySelectorAll('.btn__theme') as NodeListOf<Element>;

    this.btns = btnOption;

    section!.classList.toggle('container__theme-active');
    arrow.classList.toggle('arrow__theme-active');
    secTheme!.classList.toggle('themes-active');

    btnOption[0].classList.add('btn__theme-selected');
    for (let i = 0; i < btnOption.length; i++) {
      this.changeColors(btnOption[i] as HTMLElement);
    }
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

  private changeColors (btn: any) {
    const body       = document.body as HTMLElement;
    const falseCheck = document.getElementById('demo__checkBox') as HTMLElement;
    const btnCheck   = document.querySelectorAll('.check-task');
    const btnTheme   = document.querySelectorAll('.btn__option');
    const elements = [
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
      const newBtn = btnTheme[i] as HTMLElement;
      const { color, colorText, borderForOpt } = this.colors[i];

      Object.assign(newBtn.style, {
        border: `1px solid ${borderForOpt}`
      });

      newBtn.addEventListener('click', () => {
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
          btn.style.setProperty(prop, value);
        }

        updateColorsText(colorText);
        falseCheck.style.border  = `1px solid ${colorText}`;
      });
    }
  }


  private changeImage () {

  }
}
