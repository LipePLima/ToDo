import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  @Input() value: string | undefined;
  @Input() tasks: { task: string }[] = [];

  public viewCompleteds() {
    const arrow:         HTMLElement | null = document.getElementById('arrow__completed');
    const listCompleted: HTMLElement | null = document.getElementById('list__completed');

    arrow!.classList.toggle('arrow__completed-active');
    listCompleted!.classList.toggle('list__completed-active');
  }
}
