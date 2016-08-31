'use strict'

class Task {

  constructor(taskName = '', execFunc = () => { console.log('not implemented.') }) {
    this.taskName = taskName;
    this.execFunc = execFunc;
  }

  execute() { this.execFunc() }
}

module.exports = Task
