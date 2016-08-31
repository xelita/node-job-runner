'use strict'

// required imports
const Task = require('./Task')

class AfterTask extends Task {

  constructor(execFunc = () => { console.log(`${this.taskName} not implemented.`) }) {
    super('AfterTask', execFunc)
  }

  execute() { this.execFunc() }
}

module.exports = AfterTask
