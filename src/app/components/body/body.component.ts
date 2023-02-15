import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  ngOnInit(): void {
    this.date();
  }

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

  public reset(event: any): void {
    document.getElementById('btn__refresh')?.addEventListener('click', () => {
      event.value = '';
      event.focus();

    })
  }

  // public addTask() {
  //   let list: HTMLElement | null = document.getElementById('list__task');

  //   const row = `<li class="task">
  //   <div class="info-task">
  //     <button class="check-task" (click)="finishTask()">
  //       <span class="material-symbols-outlined check">done</span>
  //     </button>
  //     <p class="text-task"></p>
  //   </div>
  //   <button class="remove-task">
  //     <span class="material-symbols-outlined remove">delete_forever</span>
  //   </button>
  // </li>`

  //   list!.innerHTML += row
  // }
}
