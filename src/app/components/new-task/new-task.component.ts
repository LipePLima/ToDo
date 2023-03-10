import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})

export class NewTaskComponent {
  @Input() taskList: { task: string }[] = [];
  @Input() task: string = '';

  public finishTask(event: any) {
    const listToDo      = document.getElementById('list__task')      as HTMLElement;
    const listCompleted = document.getElementById('list__completed') as HTMLElement;
    const btn           = document.getElementById('btn__completed')  as HTMLElement;
    const check         = event.currentTarget;
    const task          = check.parentNode.querySelector('.text-task');

    check?.classList.toggle('check-active');
    task?.classList.toggle('text-active');

    btn!.classList.add('btn__completed-active');

    let row = check.parentNode.parentNode.parentNode;
    if (check.classList.contains('check-active')) {
      listCompleted!.appendChild(row);

    } else {
      listToDo!.appendChild(row);

    }

    if (listCompleted?.childElementCount === 0) {
      btn!.classList.remove('btn__completed-active');

    }
  }

  public removeTask(event: any) {
    const btnRemove = event.currentTarget;
    const taskInfo = btnRemove.parentNode.querySelector('.text-task');

    this.taskList.forEach((el) => {
      if (taskInfo.textContent == el.task) {
        const position = this.taskList.indexOf(el);

        this.taskList.splice(position, 1);

        localStorage.setItem('taskList', JSON.stringify(this.taskList));
      }
    });
  }
}
