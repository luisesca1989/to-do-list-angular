import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'To-Do-List';
  listArray: string[] = ['Task 1', 'Task 2'];
  form: FormGroup = new FormGroup ({
    newTask: new FormControl('')
  })

  addTask = () => {
    const task = this.form.value;
    this.listArray.push(task.newTask)
  }

  deleteTask = (index: number) => {
    this.listArray.splice(index,1);
  }

  moveUpTask = (index: number) => {
    if (index > 0) {
      [this.listArray[index], this.listArray[index-1]] = 
      [this.listArray[index-1], this.listArray[index]]
    }
  }

  moveDownTask = (index: number) => {
    if ( index < this.listArray.length - 1 ) {
      [this.listArray[index], this.listArray[index+1]] = 
      [this.listArray[index+1], this.listArray[index]]
    }
  }

}
