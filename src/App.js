import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Front-End Developer",
      todoItems: [
        {action: "Napisać prostą aplikację", done: false},
        {action: "Dodać RWD aplikacji", done: false},
        {action: "Dodać nową funkcjonalność do bieżącej aplikacji"}
      ],
      newItemText: ""
    }
  }

  updateNewTextValue = (event) => {
    this.setState({newItemText: event.target.value});
  }

  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems, {action: this.state.newItemText, done: false}],
        newItemText: ""
      });
    }
  }

  toggleTodo = (todo) => this.setState({
    todoItems: 
      this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
  });

  todoTableRows = () => this.state.todoItems.map(item => 
    <tr key={item.action}>
      <td>{item.action}</td>
      <td>
        <input type="checkbox" checked={item.done}
          onChange={() => this.toggleTodo(item)} />
      </td>
    </tr>)

  render() {
    return (
      <div>
        <h4 className="task-list">
          Lista zadań użytkownika { this.state.userName }
          (Liczba zadań: {this.state.todoItems.filter(t => !t.done).length})
        </h4>
        <div>
          <div>
            <input value={this.state.newItemText} onChange={this.updateNewTextValue} />
            <button onClick={this.createNewTodo}>Dodaj</button>
          </div>
          <table>
            <thead>
              <tr><th>Opis</th><th>Wykonane</th></tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
        
      </div>
    )
  }
}
