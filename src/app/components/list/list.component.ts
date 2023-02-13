import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  private listCheck:     any
  private listTask:      any

  public finishTask() {
    const listToDo      = document.querySelector('.list__task')
    const check         = document.querySelectorAll('.check-task');
    const task          = document.querySelectorAll('.text-task');
    const listCompleted = document.getElementById('list__completed');
    const btn           = document.getElementById('btn__completed');

    console.log(listToDo)
    for (let i = 0; i < check.length; i++) {
      check[i]?.classList.toggle('check-active')
      task[i]?.classList.toggle('text-active')
    }

    btn!.classList.add('btn__completed-active');

    this.listCheck = check;
    this.listTask  = task

    this.listCheck.forEach( (el: any) => {
      let row = el.parentNode.parentNode;
      if (el.classList.contains('check-active')) {
        listCompleted!.appendChild(row)

      } else {
        listToDo!.appendChild(row)
        
      }
    })

  }

  public viewCompleteds() {
    const arrow = document.getElementById('arrow__completed');
    arrow!.classList.toggle('arrow__completed-active');

    const listCompleted = document.getElementById('list__completed');
    listCompleted!.classList.toggle('list__completed-active');

  }

}
