import { Component, OnInit } from "@angular/core";
import { Todo } from "../interface/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  post: Todo[] = [
    { task: "fold clothes", complete: false },
    { task: "put clothes in dresser", complete: false },
    { task: "relax", complete: false },
    { task: "try to pet cat", complete: true },
    { task: "pet dog", complete: false },
    { task: "be awesome", complete: false }
  ];

  constructor() {}

  ngOnInit() {}
}
