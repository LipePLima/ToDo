import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss', './bodyMQ.component.scss'],
})

export class BodyComponent implements OnInit {
  taskGenerated: { task: string }[] = [];
  inputValue = '';

  ngOnInit(): void {
    this.date();

    if (!localStorage['taskList']) {
      localStorage.setItem('taskList', JSON.stringify(this.taskGenerated));
    }

    const taskList = localStorage.getItem("taskList");
    if (typeof taskList === 'string') {
      this.taskGenerated = JSON.parse(taskList);
    }
  }

  public date() {
    let now: number = Date.now();
    let date: Date = new Date(now);

    return date;
  }

  @ViewChild('elementSelect')
  inputSelected!: ElementRef;

  public createTask(): void {
    const input = this.inputSelected.nativeElement;
    this.inputValue = input.value;

    if (this.inputValue === '') {
      input.style.border = '1px solid red';
    } else {
      input.style.border = 'none';

      this.taskGenerated.push({ task: this.inputValue });

      localStorage.setItem('taskList', JSON.stringify(this.taskGenerated));
      this.reset();
    }
  }

  public reset(): void {
    this.inputSelected.nativeElement!.value = '';
    this.inputSelected.nativeElement!.focus();
  }
}
