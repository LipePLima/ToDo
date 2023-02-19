import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() value: string | undefined;
  @Output() func = new EventEmitter();

  ngOnInit(): void {
    this.createNewTask();
  }

  private createNewTask() {
    const task = document.createElement('li');
    task.classList.add('task');

    const infoTask = document.createElement('div');
    infoTask.classList.add('info-task');

    const checkTask = document.createElement('button');
    checkTask.classList.add('check-task');
    checkTask.id = 'check-task';

    const checkSymbol = document.createElement('span');
    checkSymbol.classList.add('material-symbols-outlined', 'check');
    checkSymbol.textContent = 'done';

    const textTask = document.createElement('p');
    textTask.classList.add('text-task');

    const removeTask = document.createElement('button');
    removeTask.classList.add('remove-task');

    const removeSymbol = document.createElement('span');
    removeSymbol.classList.add('material-symbols-outlined', 'remove');
    removeSymbol.textContent = 'delete_forever';

    infoTask.appendChild(checkTask);
    checkTask.appendChild(checkSymbol);
    infoTask.appendChild(textTask);
    task.appendChild(infoTask);
    task.appendChild(removeTask);
    removeTask.appendChild(removeSymbol);

    const infos = [task, checkTask, textTask, removeTask]

    this.func.emit(infos);
  }

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

    if (listCompleted?.childElementCount == 0) {
      btn!.classList.remove('btn__completed-active');

    }

  }

  public viewCompleteds() {
    const arrow:         HTMLElement | null = document.getElementById('arrow__completed');
    const listCompleted: HTMLElement | null = document.getElementById('list__completed');

    arrow!.classList.toggle('arrow__completed-active');
    listCompleted!.classList.toggle('list__completed-active');

  }
}
