import React, {Component} from 'react';

export class TodoBanner extends Component {
    render() {
        return (
            <h4 className="task-list">
                Lista zadań użytkownika { this.props.name }
                (Liczba zadań: <span className="number-task">{this.props.tasks.filter(t => !t.done).length}</span>)
            </h4>
        )
    }
}