import { Route } from '@angular/router';
import { TodoWidgetComponent } from './ui/todo-widget/todo-widget.component';

export const todoRoutes: Route[] = [
  {
    path: '',
    component: TodoWidgetComponent
  }
];
