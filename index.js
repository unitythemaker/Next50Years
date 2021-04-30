const fastify = require('fastify')({
    ignoreTrailingSlash: true,
})
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', // optional: default '/'
})

fastify.listen(3000)
