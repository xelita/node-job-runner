'use strict'

// required imports
const BeforeTask = require('../core/BeforeTask')
const DoTask = require('../core/DoTask')
const AfterTask = require('../core/AfterTask')
const Job = require('../core/Job')

let beforeTask = new BeforeTask(() => {
  console.log('preparing hello world')
  this.message = 'hello from Mars!'
})

let doTask = new DoTask(() => {
  console.log(`stored message < ${this.message} >`)
})

let afterTask = new AfterTask(() => {
  console.log('after hello world')
  this.message = '...'
})

let job = new Job(beforeTask, doTask, afterTask)

module.exports = job
