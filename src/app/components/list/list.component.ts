import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public finishTask() {
    const check = document.getElementById('check-task');
    const task  = document.getElementById('text-task');

    check?.classList.toggle('check-active')
    task?.classList.toggle('text-active')
  }
}
