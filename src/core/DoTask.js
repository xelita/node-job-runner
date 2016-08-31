'use strict'

// required imports
const Task = require('./Task')

class DoTask extends Task {

  constructor(execFunc = () => { console.log(`${this.taskName} not implemented.`) }) {
    super('DoTask', execFunc)
  }

  execute() { this.execFunc() }
}

module.exports = DoTask
