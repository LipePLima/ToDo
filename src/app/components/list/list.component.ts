import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public finishTask(event: any) {
    const listToDo      = document.querySelector('.list__task')
    const listCompleted = document.getElementById('list__completed');
    const btn           = document.getElementById('btn__completed');
    const check         = event.target.parentNode;
    const task          = check.parentNode.querySelector('.text-task');

    check?.classList.toggle('check-active');
    task?.classList.toggle('text-active')

    btn!.classList.add('btn__completed-active');


    let row = check.parentNode.parentNode;
    if (check.classList.contains('check-active')) {
      listCompleted!.appendChild(row)

    } else {
      listToDo!.appendChild(row)

    }


  }

  public viewCompleteds() {
    const arrow:         HTMLElement | null = document.getElementById('arrow__completed');
    const listCompleted: HTMLElement | null = document.getElementById('list__completed');

    arrow!.classList.toggle('arrow__completed-active');
    listCompleted!.classList.toggle('list__completed-active');

  }

}
