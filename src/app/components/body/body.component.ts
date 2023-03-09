import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  ngOnInit(): void {
    this.date();
  }

  public date() {
    let now: number = Date.now();
    let date: Date = new Date(now);

    return date;
  }

  taskGenerated: { task: string }[] = [];
  inputValue = '';

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
      input.value = ''
    }
  }

  public reset(): void {
    this.inputSelected.nativeElement!.value = '';
    this.inputSelected.nativeElement!.focus();
  }
}
