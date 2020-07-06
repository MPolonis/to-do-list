import React, { Component } from 'react';

export class VisibilityControl extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.isChecked} onChange={(e) => this.props.callback(e.target.checked)} />
                <label>Pokaż {this.props.description}</label>
            </div>
        )
    }
}