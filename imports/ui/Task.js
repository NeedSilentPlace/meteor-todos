import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../api/tasks';

export default function Task(props) {
  function toggleChecked() {
    Meteor.call('tasks.setChecked', props.task._id, !props.task.checked);
  }
  function deleteThisTask() {
    Meteor.call('tasks.remove', props.task._id);
  }

  const taskClassName = props.task.checked ? 'checked' : '';

  return (
    <li className={taskClassName}>
      <button className="delete" onClick={deleteThisTask}>
        &times;
      </button>

      <input
        type="checkbox"
        readOnly
        checked={!!props.task.checked}
        onClick={toggleChecked}
      />
      <span className="text">
        <strong>{props.task.username} : {props.task.text}</strong>
      </span>
    </li>
  );
};
