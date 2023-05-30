import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<h1>{{ hello }}</h1>',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  hello = 'Hello World!';
}
