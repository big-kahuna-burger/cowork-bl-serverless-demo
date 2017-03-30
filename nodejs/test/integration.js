'use strict'

process.env.NODE_ENV = 'test'

var test = require('tape')
var hyperquest = require('hyperquest')
var concat = require('concat-stream')
var devApi = 'https://lrh2xoziwj.execute-api.us-east-1.amazonaws.com/dev/'

test('should call /hello', function (t) {
  t.plan(2)
  hyperquest(devApi + 'hello')
    .pipe(concat(function (data) {
      t.deepEqual(JSON.parse(data.toString()), {message: 'Hello from nodejs!'}, 'responses should match')
    }))
})
