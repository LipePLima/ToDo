import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  @Input() task: string = '';

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
}
