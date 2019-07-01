import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks';  //api

import Task from './Task'; //ui
import AccountsUiWrapper from './AccountsUiWrapper';

function App(props) {
  const [text, setText] = useState('');
  const [hideCompleted, setHideCompleted] = useState(false);
  function toggleHideCompleted() {
    setHideCompleted(!hideCompleted);
  }
  function handleSubmit() {
    event.preventDefault();
    Meteor.call('tasks.insert', text);
    setText('');
    //then 으로 DB에 저장된 후에 DOM을 수정하는게 맞지 않을까?
  }

  function renderTasks() {

    let filteredTasks = props.tasks;
    if(hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }

    return filteredTasks.map(task => (
      <Task key={task._id} task={task} />
    ));
  }

  return (
    <div className="container">
      <header>
        <h1>Todo List ({props.incompleteCount})</h1>

        <label className="hide-completed">
          <input
            type="checkbox"
            readOnly
            checked={hideCompleted}
            onClick={toggleHideCompleted}
          />
          Hide Completed Tasks
        </label>

        <AccountsUiWrapper />
        {props.currentUser ? (
          <form className="new-task" onSubmit={handleSubmit} >
            <input
              type="text"
              value={text}
              onChange={(ev) => setText(ev.target.value)}
              placeholder="Type to add new tasks"
            />
          </form>
        ) : ''}
      </header>

      <ul>
      {renderTasks()}
      </ul>
    </div>
  );
}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  }
})(App);
