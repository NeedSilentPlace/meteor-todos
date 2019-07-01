import React from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default function Task(props) {
  function toggleChecked() {
    Meteor.call('tasks.setChecked', props.task._id, !props.task.checked);
  }
  function deleteThisTask() {
    Meteor.call('tasks.remove', props.task._id);
  }
  function togglePrivate() {
    Meteor.call('tasks.setPrivate', props.task._id, !props.task.private);
  }
  const taskClassName = classnames({
    checked: props.task.checked,
    private: props.task.private,
  });

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
      {props.showPrivateButton ? (
        <button className="toggle-private" onClick={togglePrivate}>
          {props.task.private ? 'Private' : 'Public'}
        </button>
      ) : ''}
      <span className="text">
        <strong>{props.task.username} : {props.task.text}</strong>
      </span>
    </li>
  );
};
