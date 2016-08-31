'use strict'

// required imports
const BeforeTask = require('./BeforeTask')
const DoTask = require('./DoTask')
const AfterTask = require('./AfterTask')

class Job {

  constructor(beforeTask = new BeforeTask(), doTask = new DoTask(), afterTask = new AfterTask()) {
    this.beforeTask = beforeTask;
    this.doTask = doTask;
    this.afterTask = afterTask;
  }

  execute() {
    this.beforeTask.execute()
    this.doTask.execute()
    this.afterTask.execute()
  }
}

module.exports = Job
