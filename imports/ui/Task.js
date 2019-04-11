import React, { Component } from 'react';
import { Tasks } from '../api/tasks.js';
import classnames from 'classnames';
import { Meteor } from 'meteor/meteor';

// Task component - represents a single todo item
export default class Task extends Component {
    toggleChecked() {
        // Set the checked property to the opposite of its current value
        Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
    }
    deleteThisTask() {
        Meteor.call('tasks.remove', this.props.task._id);
    }
    togglePrivate() {
        Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
    }
    render() {
        // Give tasks a different className when they are checked off,
        // so that we can style them nicely in CSS
        const taskClassName = classnames({
            checked: this.props.task.checked,
            private: this.props.task.private,
          });
    
        return (
        <li className={taskClassName} onClick = {this.toggleChecked.bind(this)}>
            <button className="delete" onClick={this.deleteThisTask.bind(this)}>
            &times;
            </button>
    
            <input
            type="checkbox"
            readOnly
            checked = {!!this.props.task.checked}
            onClick = {this.toggleChecked.bind(this)}
            />
            { this.props.showPrivateButton ? (
            <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
                { this.props.task.private ? 'Private' : 'Public' }
            </button>
            ) : ''}
            <a className="text" href= "https://hero.fandom.com/wiki/Link_(Legend_of_Zelda)">
            <strong>{this.props.task.username}</strong>: {this.props.task.text}
            </a>
            
        </li>
        );
    }
}