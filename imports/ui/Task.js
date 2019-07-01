import React from 'react';

import { Tasks } from '../api/tasks';

export default function Task(props) {
  function toggleChecked() {
    Tasks.update(props.task._id, {
      $set: { checked: !props.task.checked },
    });
  }
  function deleteThisTask() {
    Tasks.remove(props.task._id);
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
