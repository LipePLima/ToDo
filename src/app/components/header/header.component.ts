import { Component } from '@angular/core';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public currentTime = this.time();
  public Hours: string | undefined

  private time (): void {
    setInterval(() => {
      let date = new Date()
      let hours = date.getHours()
      let minutes = date.getMinutes()

      if (minutes < 10) {
        let newMinutes = '0' + minutes
        this.Hours = `${hours}:${newMinutes}`
      } else {
        this.Hours = `${hours}:${minutes}`
      }
    }, 1000)
  }

}
