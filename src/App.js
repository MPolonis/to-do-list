import React, {Component} from 'react';
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";
import { VisibilityControl } from "./VisibilityControl";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Front-End Developer",
      todoItems: [
        {action: "Napisać prostą aplikację", done: false},
        {action: "Dodać RWD aplikacji", done: false},
        {action: "Dodać nową funkcjonalność do bieżącej aplikacji", done: false}
      ],
      showCompleted: true
    }
  }

  updateNewTextValue = (event) => {
    this.setState({newItemText: event.target.value});
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, {action: task, done: false}],
        
      });
    }
  }

  toggleTodo = (todo) => this.setState({
    todoItems: 
      this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
  });

  todoTableRows = (doneValue) => this.state.todoItems.filter(item => item.done === doneValue).map(item => 
    <TodoRow key={item.action} item={item} callback={this.toggleTodo} />)
  
  render() {
    return (
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
      <div>
        <TodoCreator callback={this.createNewTodo} />
        <table>
          <thead>
            <tr><th>Opis</th><th>Wykonane</th></tr>
          </thead>
          <tbody>{this.todoTableRows(false)}</tbody>
        </table>
        <div>
          <VisibilityControl description="Wykonane zadania" isChecked={this.state.showCompleted} callback={(checked) => this.setState({showCompleted: checked})} />
        </div>
        {this.state.showCompleted &&
          <table>
            <thead>
              <tr><th>Opis</th><th>Wykonane</th></tr>
            </thead>
            <tbody>{this.todoTableRows(true)}</tbody>
          </table>
        }
      </div>
    </div>
    )
  }
}
