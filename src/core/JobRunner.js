'use strict'

// required imports
const Job = require('./Job')

class JobRunner {

  execute(job = new Job()) {
    job.execute();
  }
}

module.exports = JobRunner
