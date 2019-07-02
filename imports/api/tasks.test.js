import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';

import { Tasks } from './tasks';


if(Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = Random.id();  // create ramdom id
      let taskId;

      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: 'imeasday',
        });
      });

      it('can not insert task', () => {
        const insertTask = Meteor.server.method_handlers['tasks.insert'];
        const invocation = { userId : undefined };

        assert.throws(() => insertTask.call(invocation, 'some text'), Meteor.Error, 'not-authorized');
        assert.equal(Tasks.find().count(), 1);
      });

      it('can be delete owned task', () => {
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];  // get remove method
        const invocation = { userId };  // { userId : ~~~~}

        deleteTask.apply(invocation, [taskId]); 

        assert.equal(Tasks.find().count(), 0);
      });

      it('can not be deleted if it is not task owner', () => {
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];
        const invocation = { userId: 'IAMNOTOWNER' };

        assert.equal(Tasks.find().count(), 1);   //data should be remain
        assert.throws(() => deleteTask.apply(invocation, [taskId]), Meteor.Error, 'not-authorized');
      });

    });
  });
}
