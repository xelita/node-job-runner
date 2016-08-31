'use strict'

// required imports
const Task = require('./Task')

class BeforeTask extends Task {

  constructor(execFunc = () => { console.log(`${this.taskName} not implemented.`) }) {
    super('BeforeTask', execFunc)
  }

  execute() { this.execFunc() }
}

module.exports = BeforeTask
