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

  private color: ApiColors[] = [];
  private image: ApiImages[] = [];

  ngOnInit(): void {
      this.service.color().subscribe( color => {
        this.color = color
      });
      this.service.images().subscribe( image => {
        this.image = image
      });
  }

  public displayTheme() {
    console.log(this.color)
    const section  = document.getElementById('container__theme');
    const arrow    = document.getElementById('arrow__theme');
    const secTheme = document.getElementById('themes');

    section!.classList.toggle('container__theme-active');
    arrow!.classList.toggle('arrow__theme-active');
    secTheme!.classList.toggle('themes-active')
  }
}
