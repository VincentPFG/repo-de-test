express = require 'express'

module.exports.handler = (event, context, callback) ->
    callback null,
        statusCode: 200
        body: "#{express?}"