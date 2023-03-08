import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})

export class BodyComponent implements OnInit{
  public input: HTMLInputElement | undefined;

  ngOnInit(): void {
    this.date();

    const input = document.getElementById('input__task') as HTMLInputElement;
    this.input = input;
  }

  public date () {
    let now: number = Date.now()
    let date: Date  = new Date(now);

    return date
  }

  public reset(): void {
    this.input!.value = '';
    this.input!.focus();
  }

  public createTask(data: any): void {
    document.getElementById('btn__input')?.addEventListener('click', () => {
      console.log(data)
      const taskInput = this.input!.value;

      if (taskInput) {
        const taskList = document.getElementById('list__task');
        const fragment = document.createDocumentFragment();

        data[2].textContent = taskInput;
        console.log(data[2])

        fragment.appendChild(data[0]);
        taskList!.appendChild(fragment);

        this.reset();
      }
    })
  }
}
