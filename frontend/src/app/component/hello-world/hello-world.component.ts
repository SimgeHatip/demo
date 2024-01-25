import {Component, OnInit} from '@angular/core';
import {HelloWorldService} from "../../service/hello-world.service";
import { Message } from '../../modal/message';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  message: string ="";

  constructor(private helloWorldService: HelloWorldService) {
  }

  ngOnInit() {
    console.log("HelloWorldComponent");
    this.helloWorldService.helloWorldService().subscribe((result:Message) => {
      this.message = result.content;
    });
  }
}
