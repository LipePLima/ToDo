import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './headerMQ.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    this.time();
    this.date();
  }

  public Hours: string | undefined;

  public date() {
    let now: number = Date.now();
    let date: Date = new Date(now);

    return date;
  }

  private time (): void {
    setInterval(() => {
      let date    = new Date();
      let hours   = date.getHours().toString().padStart(2, '0');
      let minutes = date.getMinutes().toString().padStart(2, '0');

      this.Hours = `${hours}:${minutes}`;
    }, 1000);
  }
}
