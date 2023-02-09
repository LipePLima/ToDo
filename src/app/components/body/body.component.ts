import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  public callDate = this.date();
  public infoDate: string | undefined;

  private date () {
    let now  = Date.now()
    let date = new Date(now);
    let days = [
      'Domingo',
      'Segunda-Feira',
      'Terça-Feira',
      'Quarta-Feira',
      'Quinta-Feira',
      'Sexta-Feira',
      'Sábado'
    ];

    let months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];

    console.log(date.getDay())

    this.infoDate = `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]}`
  }
}
