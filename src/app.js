'use strict'

// required imports
const JobRunner = require('./core/JobRunner');
const helloJob = require('./embedded-scripts/helloworld-script');

let jobRunner = new JobRunner()
jobRunner.execute()
jobRunner.execute(helloJob)
