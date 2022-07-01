import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.css'],

  template: `<h1 [ngClass]="{title}"></h1>`,
  styles: [
    `.title{ letter-spacing: 5px; }`
  ]
})

export class TodoCreateFormUiComponent implements OnInit {
  name = '';

  @Output()
  create = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onCreate() {
    if (this.name) {
      this.create.emit(this.name);
      this.name = '';
    }
  }

}
