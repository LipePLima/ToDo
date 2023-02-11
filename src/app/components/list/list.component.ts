import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public finishTask(btn: any) {
    console.log(btn)
    const check = document.querySelectorAll('.check-task');
    const task  = document.querySelectorAll('.text-task');

    // check.forEach(element => {
    //   element.addEventListener("click", event => {
    //     console.log(event.target)
    //     event.stopPropagation
    //     // check[i]?.classList.toggle('check-active')
    //   })
    // })

    // task?.classList.toggle('text-active')
  }

  public viewCompleteds() {
    const arrow = document.getElementById('arrow__completed');
    arrow!.classList.toggle('arrow__completed-active');

    const listCompleted = document.getElementById('list__completed');
    listCompleted!.classList.toggle('list__completed-active');
  }
}
