import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    this.time();
  }

  public Hours: string | undefined;

  private time (): void {
    setInterval(() => {
      let date    = new Date();
      let hours   = date.getHours().toString().padStart(2, '0');
      let minutes = date.getMinutes().toString().padStart(2, '0');

      this.Hours = `${hours}:${minutes}`;
    }, 1000);
  }

}
