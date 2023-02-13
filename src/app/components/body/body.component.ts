import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor () {
    this.date();
  }

  private field: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('input__task'));
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
    this.field.value = '';
    this.field.focus()
  }

  public addTask() {
    let list: HTMLElement | null = document.getElementById('list__task')

    list!.innerHTML += `
    <li class="task">
      <div class="info-task">
        <button class="check-task" (click)="finishTask()">
          <span class="material-symbols-outlined check">done</span>
        </button>
        <p class="text-task"></p>
      </div>
      <button class="remove-task">
        <span class="material-symbols-outlined remove">delete_forever</span>
      </button>
    </li>
    `

    const text: Element | null = document.querySelector('.text-task');
    text!.textContent = this.field.value
  }
}
