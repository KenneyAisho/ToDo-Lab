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
    { task: "be awesome", complete: false },
    { task: "lift weights", complete: false },
    { task: "lift more weights", complete: false }
  ];

  newPost: Todo = {
    task: " ",
    complete: false
  };

  constructor() {}

  ngOnInit() {}

  completeTask(index: number): void {
    let completed = this.post[index];
    completed.complete = !completed.complete;
  }

  removeTask(index: number): void {
    let hidden = this.post[index];
    hidden.task = "";
    hidden.complete = true;
  }

  addTask(): void {
    this.post.push(this.newPost);

    this.newPost = {
      task: "",
      complete: false
    };
  }
}
