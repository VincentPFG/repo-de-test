express = require 'express'
serverless = require 'serverless-http'

app = express()
router = express.Router()

app.use '/.netlify/functions/express', router

router.get '/', (r, s) ->
    s.send 'hello express'

module.exports.handler = serverless app