import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})

export class BodyComponent implements OnInit{
  ngOnInit(): void {
    this.date();
  }

  public date () {
    let now: number = Date.now()
    let date: Date  = new Date(now);

    return date
  }

  public reset(event: any): void {
    document.getElementById('btn__refresh')?.addEventListener('click', () => {
      event.value = '';
      event.focus();

    })
  }
}
