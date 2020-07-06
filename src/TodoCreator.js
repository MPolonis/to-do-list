import React, {Component} from 'react';

export class TodoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {newItemText: ""}
    }

    updateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value});
    }
    
    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({newItemText: ""});
    }

    render() {
        return (
            <div>
                <input value={this.state.newItemText} onChange={this.updateNewTextValue} />
                <button onClick={this.createNewTodo}>Nowe zadanie</button>
            </div>
        )
    }
    
}