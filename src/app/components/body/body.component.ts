import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  public callDate = this.date();
  public infoDate: string | undefined;

  private date (): void {
    let now: number    = Date.now()
    let date: Date     = new Date(now);
    let days: string[] = [
      'Domingo',
      'Segunda-Feira',
      'Terça-Feira',
      'Quarta-Feira',
      'Quinta-Feira',
      'Sexta-Feira',
      'Sábado'
    ];

    let months: string[] = [
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

    this.infoDate = `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]}`
  }

  public reset(): void {
    let field: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('input__task'));

    field.value = '';
    field.focus()
  }
}
